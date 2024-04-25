import {
    IonActionSheet,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonRippleEffect,
    IonRow,
} from "@ionic/react";
import { pencilOutline, trashOutline } from "ionicons/icons";
import { useState } from "react";
import axiosIntance from "axios";

type Todo = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    deadline: Date;
};
    export const TodoList: React.FC = () => {
        const [openActionSheet, setOpenActionSheet] = useState(false);
        const [todos, setTodos] = useState<Todo[]>([]);

        const fetchTodos = () => {
            axiosIntance
                .get("/todos")
                .then((res) => {
                    setTodos(res.data);
            })
            .catch(console.error);
        };

        const deleteTodo = (id: string) => {
            axiosIntance
                .request({
                    url: `/todos/${id}`,
                    method: "DELETE",
            })
            .then((res) => {
            fetchTodos();
            })
            .catch(console.error);
        };
    
        return (
            <IonGrid className="ion-padding">
                <IonRow>
                    {todos.map((todo) => {
                        return (
                            <IonCol size="12" className="ion-margin-bottom">
                                <IonCard
                                    className="ion-no-margin ion-activatable"
                                    onClick={() => setOpenActionSheet(true)}
                                >
                                    <IonRippleEffect></IonRippleEffect>
                                    <IonCardHeader>
                                        <IonCardTitle>{todo.title}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>{todo.description}</IonCardContent>
                                </IonCard>
                            </IonCol>
                        );
                    })}
                </IonRow>
                <IonActionSheet
                    isOpen={openActionSheet}
                    header="Action"
                    buttons={[
                {
                    text: "Delete",
                    role: "destructive",
                    icon: trashOutline,
                    data: {
                        action: "delete",
                    },
                },
                {
                    text: "Edit",
                    icon: pencilOutline,
                    data: {
                        action: "edit",
                    },
                },
                {
                    text: "Cancel",
                    role: "cancel",
                    data: {
                        action: "cancel",
                    },
                },
            ]}
            onWillDismiss={() => setOpenActionSheet(false)}
            ></IonActionSheet>
        </IonGrid>
    );
};