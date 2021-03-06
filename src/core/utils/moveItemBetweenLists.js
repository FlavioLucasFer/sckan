'use strict';

function moveItemBetweenLists(source, destination, droppableSource, droppableDestination, noReorder) {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	if (noReorder) 
		destClone.push(removed);
	else
		destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
}

export default moveItemBetweenLists;
