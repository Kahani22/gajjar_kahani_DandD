(() => {
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		let dropZones = document.querySelectorAll('.drop-zone');

	function createPuzzlepieces(pictureIndex){
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;
 		})

 		puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

 		initDrag();
 		
	}

	// drag and drop functionality
	 function initDrag () {
	 	piecesBoard.querySelectorAll('img').forEach(img => {
	 		img.addEventListener("dragstart", function(e) {
	 			console.log('draggin...')

	 			e.dataTransfer.setData("text/plain",this.id);
	 		});
	 	});
	}

		dropZones.forEach(zone => {
			zone.addEventListener("dragover", function(e) {
				e.preventDefault();
				console.log("you dragged over me!");
			});

			zone.addEventListener("drop", function(e) {
				e.preventDefault();
				console.log("you dropped something on me!");

                let piece = e.dataTransfer.getData("text/plain");

				//if the dropzone has any childern the function will return 
					if(!zone.innerHTML) {
						e.target.appendChild(document.querySelector(`#${piece}`));	
                        console.log('the dropzone is empty, drop something!')
					} else {
						return;
					}
				})		
			});
	


	function resetPuzzlePieces(){
		// debugger;
		piecesBoard.innerHTML = "";
		createPuzzlepieces(this.dataset.puzzleref)

		dropZones.forEach(zone => {
    // clearing dropzone on reset
	zone.innerHTML = "";
	console.log("clearing dropzones");
        });
    }
    puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));
	createPuzzlepieces(0);

        })();



    


