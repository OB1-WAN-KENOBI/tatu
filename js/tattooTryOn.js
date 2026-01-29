// Tattoo Try-On functionality using Canvas API
let canvas, ctx;
let bodyImage = null;
let tattooImage = null;
let tattooState = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: 0,
  opacity: 1,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0
};

function initCanvas() {
  canvas = document.getElementById('tryonCanvas');
  if (!canvas) return;
  
  ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  
  // Обработка перетаскивания
  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('mouseleave', handleMouseUp);
  
  // Обработка масштабирования колесиком
  canvas.addEventListener('wheel', handleWheel, { passive: false });
}

function handleMouseDown(e) {
  if (!tattooImage || !bodyImage) return;
  
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;
  
  // Разрешаем перетаскивание в любом месте canvas, если есть тату
  tattooState.isDragging = true;
  tattooState.dragStartX = x - tattooState.x;
  tattooState.dragStartY = y - tattooState.y;
  canvas.style.cursor = 'grabbing';
}

function handleMouseMove(e) {
  if (tattooState.isDragging) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    tattooState.x = x - tattooState.dragStartX;
    tattooState.y = y - tattooState.dragStartY;
    draw();
  }
}

function handleMouseUp() {
  tattooState.isDragging = false;
  if (canvas && tattooImage && bodyImage) {
    canvas.style.cursor = 'grab';
  } else if (canvas) {
    canvas.style.cursor = 'default';
  }
}

function handleWheel(e) {
  if (!tattooImage) return;
  e.preventDefault();
  
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  tattooState.scale = Math.max(0.1, Math.min(2, tattooState.scale + delta));
  
  updateScaleSlider();
  draw();
}

function loadImage(file, type) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        if (type === 'body') {
          bodyImage = img;
          resizeCanvas();
        } else {
          tattooImage = img;
          resetTattooPosition();
        }
        draw();
        resolve(img);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function resizeCanvas() {
  if (!bodyImage) return;
  
  const maxWidth = 800;
  const maxHeight = 600;
  const ratio = Math.min(
    maxWidth / bodyImage.width,
    maxHeight / bodyImage.height
  );
  
  canvas.width = bodyImage.width * ratio;
  canvas.height = bodyImage.height * ratio;
  
  draw();
}

function resetTattooPosition() {
  tattooState.x = 0;
  tattooState.y = 0;
  tattooState.scale = 1;
  tattooState.rotation = 0;
  tattooState.opacity = 1;
  
  updateSliders();
}

function clearAll() {
  // Очищаем изображения
  bodyImage = null;
  tattooImage = null;
  
  // Очищаем input файлы
  const bodyInput = document.getElementById('bodyPhotoInput');
  const tattooInput = document.getElementById('tattooSketchInput');
  if (bodyInput) bodyInput.value = '';
  if (tattooInput) tattooInput.value = '';
  
  // Скрываем панель управления
  const controlsPanel = document.getElementById('tryonControlsPanel');
  if (controlsPanel) {
    controlsPanel.style.display = 'none';
  }
  
  // Показываем placeholder
  const placeholder = document.getElementById('tryonPlaceholder');
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
  
  // Очищаем canvas
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Возвращаем canvas к исходному размеру
    canvas.width = 800;
    canvas.height = 600;
    // Сбрасываем курсор
    canvas.style.cursor = 'default';
  }
  
  // Сбрасываем состояние
  resetTattooPosition();
}

function draw() {
  if (!ctx) return;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Рисуем фото тела
  if (bodyImage) {
    ctx.drawImage(bodyImage, 0, 0, canvas.width, canvas.height);
  }
  
  // Рисуем эскиз тату
  if (tattooImage && bodyImage) {
    ctx.save();
    
    // Перемещаем в центр + смещение
    ctx.translate(canvas.width / 2 + tattooState.x, canvas.height / 2 + tattooState.y);
    
    // Поворот
    ctx.rotate((tattooState.rotation * Math.PI) / 180);
    
    // Прозрачность
    ctx.globalAlpha = tattooState.opacity;
    
    // Масштаб
    const scaledWidth = tattooImage.width * tattooState.scale;
    const scaledHeight = tattooImage.height * tattooState.scale;
    
    // Рисуем с центрированием
    ctx.drawImage(
      tattooImage,
      -scaledWidth / 2,
      -scaledHeight / 2,
      scaledWidth,
      scaledHeight
    );
    
    ctx.restore();
    
    // Устанавливаем курсор для перетаскивания
    if (!tattooState.isDragging) {
      canvas.style.cursor = 'grab';
    }
  }
  
  // Скрываем placeholder
  const placeholder = document.getElementById('tryonPlaceholder');
  if (placeholder && bodyImage && tattooImage) {
    placeholder.style.display = 'none';
  } else if (placeholder) {
    placeholder.style.display = 'flex';
  }
}

function updateSliders() {
  const scaleSlider = document.getElementById('scaleSlider');
  const rotationSlider = document.getElementById('rotationSlider');
  const opacitySlider = document.getElementById('opacitySlider');
  
  if (scaleSlider) {
    scaleSlider.value = tattooState.scale * 100;
    updateScaleValue();
  }
  if (rotationSlider) {
    rotationSlider.value = tattooState.rotation;
    updateRotationValue();
  }
  if (opacitySlider) {
    opacitySlider.value = tattooState.opacity * 100;
    updateOpacityValue();
  }
}

function updateScaleSlider() {
  const scaleSlider = document.getElementById('scaleSlider');
  if (scaleSlider) {
    scaleSlider.value = tattooState.scale * 100;
    updateScaleValue();
  }
}

function updateScaleValue() {
  const value = document.getElementById('scaleValue');
  if (value) {
    value.textContent = Math.round(tattooState.scale * 100);
  }
}

function updateRotationValue() {
  const value = document.getElementById('rotationValue');
  if (value) {
    value.textContent = Math.round(tattooState.rotation);
  }
}

function updateOpacityValue() {
  const value = document.getElementById('opacityValue');
  if (value) {
    value.textContent = Math.round(tattooState.opacity * 100);
  }
}

function setupEventListeners() {
  const bodyInput = document.getElementById('bodyPhotoInput');
  const tattooInput = document.getElementById('tattooSketchInput');
  const scaleSlider = document.getElementById('scaleSlider');
  const rotationSlider = document.getElementById('rotationSlider');
  const opacitySlider = document.getElementById('opacitySlider');
  const resetButton = document.getElementById('resetButton');
  const downloadButton = document.getElementById('downloadButton');
  const controlsPanel = document.getElementById('tryonControlsPanel');
  
  if (bodyInput) {
    bodyInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          await loadImage(file, 'body');
          if (tattooImage && controlsPanel) {
            controlsPanel.style.display = 'block';
          }
        } catch (error) {
          console.error('Ошибка загрузки фото тела:', error);
        }
      }
    });
  }
  
  if (tattooInput) {
    tattooInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          await loadImage(file, 'tattoo');
          if (bodyImage && controlsPanel) {
            controlsPanel.style.display = 'block';
          }
        } catch (error) {
          console.error('Ошибка загрузки эскиза:', error);
        }
      }
    });
  }
  
  if (scaleSlider) {
    scaleSlider.addEventListener('input', (e) => {
      tattooState.scale = e.target.value / 100;
      updateScaleValue();
      draw();
    });
  }
  
  if (rotationSlider) {
    rotationSlider.addEventListener('input', (e) => {
      tattooState.rotation = parseFloat(e.target.value);
      updateRotationValue();
      draw();
    });
  }
  
  if (opacitySlider) {
    opacitySlider.addEventListener('input', (e) => {
      tattooState.opacity = e.target.value / 100;
      updateOpacityValue();
      draw();
    });
  }
  
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      clearAll();
    });
  }
  
  if (downloadButton) {
    downloadButton.addEventListener('click', () => {
      if (!canvas) return;
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'tattoo-tryon-result.png';
        a.click();
        URL.revokeObjectURL(url);
      });
    });
  }
}

export function initTattooTryOn() {
  initCanvas();
  setupEventListeners();
}
