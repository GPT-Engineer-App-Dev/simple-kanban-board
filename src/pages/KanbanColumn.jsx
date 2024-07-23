import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ title, cards, columnId, moveCard, addCard, editCard, deleteCard }) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDescription, setNewCardDescription] = useState("");

  const handleAddCard = () => {
    if (newCardTitle.trim() !== "") {
      const newCard = {
        id: Date.now().toString(),
        title: newCardTitle,
        description: newCardDescription,
      };
      addCard(columnId, newCard);
      setNewCardTitle("");
      setNewCardDescription("");
    }
  };

  return (
    <Card className="w-80 flex-shrink-0">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cards.map((card) => (
          <KanbanCard
            key={card.id}
            card={card}
            columnId={columnId}
            moveCard={moveCard}
            editCard={editCard}
            deleteCard={deleteCard}
          />
        ))}
        <div className="space-y-2">
          <Input
            placeholder="New card title"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
          <Textarea
            placeholder="New card description"
            value={newCardDescription}
            onChange={(e) => setNewCardDescription(e.target.value)}
          />
          <Button onClick={handleAddCard} className="w-full">
            Add Card
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KanbanColumn;