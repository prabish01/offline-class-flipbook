/**
 * Annotation Toolbar - Interactive Drawing System
 * Shared across all class flipbooks
 * 
 * Features:
 * - Drawing tools: marker, text, shapes, arrows
 * - Interactive elements with drag and resize
 * - Per-page annotation storage
 * - Color picker and brush size controls
 */

(function() {
	// Wait for DOM to be ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initAnnotationToolbar);
	} else {
		initAnnotationToolbar();
	}

	function initAnnotationToolbar() {
		const canvas = document.getElementById('drawingCanvas');
		if (!canvas) {
			console.warn('Drawing canvas not found. Skipping annotation toolbar initialization.');
			return;
		}

		const ctx = canvas.getContext('2d');
		const album = document.getElementById('album');
		const leath = document.getElementById('leath');
		
		// State
		let isDrawing = false;
		let currentTool = 'marker';
		let currentColor = '#FF0000';
		let brushSize = 3;
		let startX, startY;
		let annotations = {}; // Store canvas drawings per page
		let interactiveElements = {}; // Store interactive elements per page
		let currentPage = 1;
		let tempCanvas = null;
		let selectedElement = null;
		let isDragging = false;
		let isResizing = false;
		let dragOffset = {x: 0, y: 0};
		
		// Initialize canvas size
		function resizeCanvas() {
			const albumRect = album.getBoundingClientRect();
			canvas.width = albumRect.width;
			canvas.height = albumRect.height;
			canvas.style.width = albumRect.width + 'px';
			canvas.style.height = albumRect.height + 'px';
			canvas.style.left = albumRect.left + 'px';
			canvas.style.top = albumRect.top + 'px';
			restoreAnnotations();
		}
		
		// Initialize
		setTimeout(resizeCanvas, 500);
		window.addEventListener('resize', resizeCanvas);
		
		// Save current page annotations
		function saveAnnotations() {
			annotations[currentPage] = canvas.toDataURL();
		}
		
		// Save interactive elements for current page
		function saveInteractiveElements() {
			const elements = document.querySelectorAll('.interactive-element');
			const elementsData = [];
			elements.forEach(el => {
				elementsData.push({
					html: el.outerHTML,
					left: el.style.left,
					top: el.style.top
				});
			});
			interactiveElements[currentPage] = elementsData;
		}
		
		// Clear all interactive elements
		function clearInteractiveElements() {
			document.querySelectorAll('.interactive-element').forEach(el => el.remove());
		}
		
		// Restore annotations for current page
		function restoreAnnotations() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (annotations[currentPage]) {
				const img = new Image();
				img.onload = function() {
					ctx.drawImage(img, 0, 0);
				};
				img.src = annotations[currentPage];
			}
			
			// Restore interactive elements
			clearInteractiveElements();
			if (interactiveElements[currentPage]) {
				interactiveElements[currentPage].forEach(elData => {
					const temp = document.createElement('div');
					temp.innerHTML = elData.html;
					const element = temp.firstChild;
					document.body.appendChild(element);
					attachElementHandlers(element);
				});
			}
		}
		
		// Watch for page changes
		const pageNumberInput = document.getElementById('page-number');
		if (pageNumberInput) {
			setInterval(function() {
				const newPage = parseInt(pageNumberInput.value) || 1;
				if (newPage !== currentPage) {
					saveAnnotations();
					saveInteractiveElements();
					currentPage = newPage;
					restoreAnnotations();
				}
			}, 500);
		}
		
		// Tool selection
		document.querySelectorAll('.tool-btn[data-tool]').forEach(btn => {
			btn.addEventListener('click', function() {
				document.querySelectorAll('.tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
				this.classList.add('active');
				currentTool = this.dataset.tool;
				canvas.classList.add('drawing-active');
				canvas.style.cursor = currentTool === 'eraser' ? 'crosshair' : 'crosshair';
			});
		});
		
		// Color selection
		document.querySelectorAll('.color-btn').forEach(btn => {
			btn.addEventListener('click', function() {
				document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
				this.classList.add('active');
				currentColor = this.dataset.color;
			});
		});
		
		// Brush size
		const brushSizeSlider = document.getElementById('brushSize');
		const sizeDisplay = document.getElementById('sizeDisplay');
		if (brushSizeSlider) {
			brushSizeSlider.addEventListener('input', function() {
				brushSize = parseInt(this.value);
				sizeDisplay.textContent = brushSize;
			});
		}
		
		// Clear button
		const clearBtn = document.getElementById('clearBtn');
		if (clearBtn) {
			clearBtn.addEventListener('click', function() {
				if (confirm('Clear all annotations on this page?')) {
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					delete annotations[currentPage];
					clearInteractiveElements();
					delete interactiveElements[currentPage];
				}
			});
		}
		
		// Eraser button
		const eraserBtn = document.getElementById('eraserBtn');
		if (eraserBtn) {
			eraserBtn.addEventListener('click', function() {
				document.querySelectorAll('.tool-btn[data-tool]').forEach(b => b.classList.remove('active'));
				this.classList.add('active');
				currentTool = 'eraser';
				canvas.classList.add('drawing-active');
				canvas.style.cursor = 'crosshair';
			});
		}
		
		// Toggle toolbar
		const toolbar = document.querySelector('.annotation-toolbar');
		const toggleBtn = document.getElementById('toggleToolbar');
		if (toggleBtn) {
			toggleBtn.addEventListener('click', function() {
				toolbar.classList.toggle('collapsed');
				const svg = this.querySelector('svg path');
				if (toolbar.classList.contains('collapsed')) {
					svg.setAttribute('d', 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z');
					this.title = 'Show Toolbar';
				} else {
					svg.setAttribute('d', 'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z');
					this.title = 'Hide Toolbar';
				}
			});
		}
		
		// Drawing functions
		function getMousePos(e) {
			const rect = canvas.getBoundingClientRect();
			return {
				x: (e.clientX || e.touches[0].clientX) - rect.left,
				y: (e.clientY || e.touches[0].clientY) - rect.top
			};
		}
		
		function startDrawing(e) {
			if (!canvas.classList.contains('drawing-active')) return;
			isDrawing = true;
			const pos = getMousePos(e);
			startX = pos.x;
			startY = pos.y;
			
			if (currentTool === 'marker' || currentTool === 'eraser') {
				ctx.beginPath();
				ctx.moveTo(startX, startY);
			} else if (currentTool === 'text') {
				const text = prompt('Enter text:');
				if (text) {
					createTextElement(text, startX, startY);
				}
				isDrawing = false;
			} else {
				// For shapes, save current canvas state
				tempCanvas = ctx.getImageData(0, 0, canvas.width, canvas.height);
			}
			e.preventDefault();
		}
		
		function draw(e) {
			if (!isDrawing) return;
			const pos = getMousePos(e);
			
			if (currentTool === 'marker') {
				ctx.strokeStyle = currentColor;
				ctx.lineWidth = brushSize;
				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';
				ctx.lineTo(pos.x, pos.y);
				ctx.stroke();
			} else if (currentTool === 'eraser') {
				ctx.globalCompositeOperation = 'destination-out';
				ctx.strokeStyle = 'rgba(0,0,0,1)';
				ctx.lineWidth = brushSize * 3;
				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';
				ctx.lineTo(pos.x, pos.y);
				ctx.stroke();
				ctx.globalCompositeOperation = 'source-over';
			} else if (tempCanvas) {
				// Clear and restore for shapes preview
				ctx.putImageData(tempCanvas, 0, 0);
				
				ctx.strokeStyle = currentColor;
				ctx.lineWidth = brushSize;
				
				if (currentTool === 'shape') {
					const radius = Math.sqrt(Math.pow(pos.x - startX, 2) + Math.pow(pos.y - startY, 2));
					ctx.beginPath();
					ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
					ctx.stroke();
				} else if (currentTool === 'rectangle') {
					ctx.strokeRect(startX, startY, pos.x - startX, pos.y - startY);
				} else if (currentTool === 'arrow') {
					drawArrow(startX, startY, pos.x, pos.y);
				}
			}
			e.preventDefault();
		}
		
		function stopDrawing(e) {
			if (!isDrawing) return;
			
			// For shapes, create interactive element instead of drawing on canvas
			if (tempCanvas && (currentTool === 'shape' || currentTool === 'rectangle' || currentTool === 'arrow')) {
				const pos = getMousePos(e);
				const width = Math.abs(pos.x - startX);
				const height = Math.abs(pos.y - startY);
				const left = Math.min(startX, pos.x);
				const top = Math.min(startY, pos.y);
				
				if (width > 10 && height > 10) {
					// Clear preview from canvas
					ctx.putImageData(tempCanvas, 0, 0);
					createShapeElement(currentTool, left, top, width, height);
				}
			}
			
			isDrawing = false;
			tempCanvas = null;
			saveAnnotations();
			e.preventDefault();
		}
		
		// Create interactive text element
		function createTextElement(text, x, y) {
			const albumRect = album.getBoundingClientRect();
			const element = document.createElement('div');
			element.className = 'interactive-element text-element';
			element.textContent = text;
			element.style.left = (albumRect.left + x) + 'px';
			element.style.top = (albumRect.top + y) + 'px';
			element.style.color = currentColor;
			element.style.fontSize = (brushSize * 6) + 'px';
			element.style.fontWeight = 'bold';
			element.style.fontFamily = 'Comic Sans MS, cursive, sans-serif';
			element.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
			
			document.body.appendChild(element);
			addElementControls(element);
			attachElementHandlers(element);
		}
		
		// Create interactive shape element
		function createShapeElement(shapeType, x, y, width, height) {
			const albumRect = album.getBoundingClientRect();
			const element = document.createElement('div');
			element.className = 'interactive-element shape-element';
			element.style.left = (albumRect.left + x) + 'px';
			element.style.top = (albumRect.top + y) + 'px';
			element.style.width = width + 'px';
			element.style.height = height + 'px';
			element.dataset.shapeType = shapeType;
			
			// Create SVG for the shape
			const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svg.style.width = '100%';
			svg.style.height = '100%';
			svg.style.position = 'absolute';
			svg.style.pointerEvents = 'none';
			
			if (shapeType === 'shape') {
				// Circle
				const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
				circle.setAttribute('cx', '50%');
				circle.setAttribute('cy', '50%');
				circle.setAttribute('r', Math.min(width, height) / 2 + 'px');
				circle.setAttribute('fill', 'none');
				circle.setAttribute('stroke', currentColor);
				circle.setAttribute('stroke-width', brushSize);
				svg.appendChild(circle);
			} else if (shapeType === 'rectangle') {
				const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				rect.setAttribute('width', '100%');
				rect.setAttribute('height', '100%');
				rect.setAttribute('fill', 'none');
				rect.setAttribute('stroke', currentColor);
				rect.setAttribute('stroke-width', brushSize);
				svg.appendChild(rect);
			} else if (shapeType === 'arrow') {
				const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				line.setAttribute('x1', '0');
				line.setAttribute('y1', '0');
				line.setAttribute('x2', width);
				line.setAttribute('y2', height);
				line.setAttribute('stroke', currentColor);
				line.setAttribute('stroke-width', brushSize);
				line.setAttribute('marker-end', 'url(#arrowhead)');
				
				const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
				const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
				marker.setAttribute('id', 'arrowhead');
				marker.setAttribute('markerWidth', '10');
				marker.setAttribute('markerHeight', '10');
				marker.setAttribute('refX', '5');
				marker.setAttribute('refY', '3');
				marker.setAttribute('orient', 'auto');
				
				const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
				polygon.setAttribute('points', '0 0, 10 3, 0 6');
				polygon.setAttribute('fill', currentColor);
				
				marker.appendChild(polygon);
				defs.appendChild(marker);
				svg.appendChild(defs);
				svg.appendChild(line);
			}
			
			element.appendChild(svg);
			document.body.appendChild(element);
			addElementControls(element);
			attachElementHandlers(element);
		}
		
		// Add resize and delete controls to element
		function addElementControls(element) {
			// Resize handle
			const resizeHandle = document.createElement('div');
			resizeHandle.className = 'resize-handle bottom-right';
			element.appendChild(resizeHandle);
			
			// Delete button
			const deleteHandle = document.createElement('div');
			deleteHandle.className = 'delete-handle';
			deleteHandle.innerHTML = '×';
			deleteHandle.onclick = function(e) {
				e.stopPropagation();
				if (confirm('Delete this element?')) {
					element.remove();
					saveInteractiveElements();
				}
			};
			element.appendChild(deleteHandle);
		}
		
		// Attach drag and resize handlers to element
		function attachElementHandlers(element) {
			const resizeHandle = element.querySelector('.resize-handle');
			
			// Click to select
			element.addEventListener('mousedown', function(e) {
				if (e.target === element || e.target.classList.contains('text-element')) {
					e.preventDefault();
					selectElement(element);
					startDragging(e, element);
				}
			});
			
			// Resize
			if (resizeHandle) {
				resizeHandle.addEventListener('mousedown', function(e) {
					e.preventDefault();
					e.stopPropagation();
					startResizing(e, element);
				});
			}
		}
		
		// Select element
		function selectElement(element) {
			document.querySelectorAll('.interactive-element').forEach(el => {
				el.classList.remove('selected');
			});
			element.classList.add('selected');
			selectedElement = element;
		}
		
		// Start dragging
		function startDragging(e, element) {
			isDragging = true;
			const rect = element.getBoundingClientRect();
			dragOffset.x = e.clientX - rect.left;
			dragOffset.y = e.clientY - rect.top;
		}
		
		// Start resizing
		function startResizing(e, element) {
			isResizing = true;
			selectedElement = element;
			e.stopPropagation();
		}
		
		// Global mouse move handler
		document.addEventListener('mousemove', function(e) {
			if (isDragging && selectedElement) {
				e.preventDefault();
				selectedElement.style.left = (e.clientX - dragOffset.x) + 'px';
				selectedElement.style.top = (e.clientY - dragOffset.y) + 'px';
			} else if (isResizing && selectedElement) {
				e.preventDefault();
				const rect = selectedElement.getBoundingClientRect();
				const newWidth = e.clientX - rect.left;
				const newHeight = e.clientY - rect.top;
				
				if (newWidth > 20) selectedElement.style.width = newWidth + 'px';
				if (newHeight > 20) selectedElement.style.height = newHeight + 'px';
				
				// Update font size for text elements
				if (selectedElement.classList.contains('text-element')) {
					const avgSize = (newWidth + newHeight) / 2;
					selectedElement.style.fontSize = Math.max(12, avgSize / 3) + 'px';
				}
			}
		});
		
		// Global mouse up handler
		document.addEventListener('mouseup', function() {
			if (isDragging || isResizing) {
				isDragging = false;
				isResizing = false;
				saveInteractiveElements();
			}
		});
		
		function drawArrow(fromX, fromY, toX, toY) {
			const headLength = 15 + brushSize * 2;
			const angle = Math.atan2(toY - fromY, toX - fromX);
			
			ctx.beginPath();
			ctx.moveTo(fromX, fromY);
			ctx.lineTo(toX, toY);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.moveTo(toX, toY);
			ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
			ctx.moveTo(toX, toY);
			ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
			ctx.stroke();
		}
		
		// Event listeners
		canvas.addEventListener('mousedown', startDrawing);
		canvas.addEventListener('mousemove', draw);
		canvas.addEventListener('mouseup', stopDrawing);
		canvas.addEventListener('mouseout', stopDrawing);
		
		// Touch support
		canvas.addEventListener('touchstart', startDrawing);
		canvas.addEventListener('touchmove', draw);
		canvas.addEventListener('touchend', stopDrawing);
	}
})();
