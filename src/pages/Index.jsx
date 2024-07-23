import { useState } from "react";
import KanbanBoard from "./KanbanBoard";

const Index = () => {
  const [columns, setColumns] = useState({
    todo: [
      { id: "1", title: "Task 1", description: "Description for Task 1" },
      { id: "2", title: "Task 2", description: "Description for Task 2" },
    ],
    inProgress: [
      { id: "3", title: "Task 3", description: "Description for Task 3" },
    ],
    done: [
      { id: "4", title: "Task 4", description: "Description for Task 4" },
    ],
  });

  const moveCard = (cardId, sourceColumn, targetColumn) => {
    setColumns((prevColumns) => {
      const card = prevColumns[sourceColumn].find((c) => c.id === cardId);
      const updatedColumns = {
        ...prevColumns,
        [sourceColumn]: prevColumns[sourceColumn].filter((c) => c.id !== cardId),
        [targetColumn]: [...prevColumns[targetColumn], card],
      };
      return updatedColumns;
    });
  };

  const addCard = (columnId, newCard) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: [...prevColumns[columnId], newCard],
    }));
  };

  const editCard = (columnId, cardId, updatedCard) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: prevColumns[columnId].map((card) =>
        card.id === cardId ? { ...card, ...updatedCard } : card
      ),
    }));
  };

  const deleteCard = (columnId, cardId) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: prevColumns[columnId].filter((card) => card.id !== cardId),
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <KanbanBoard
        columns={columns}
        moveCard={moveCard}
        addCard={addCard}
        editCard={editCard}
        deleteCard={deleteCard}
      />
    </div>
  );
};

export default Index;