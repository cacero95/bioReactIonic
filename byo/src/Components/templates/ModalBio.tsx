import { useState } from "react";
import { IonModal, IonContent, IonDatetime, IonItem, IonLabel } from "@ionic/react";

interface Props {
    contentLabel: any
}

export const ModalBio = (
    { contentLabel } : Props
) => {
    const [ open, openModal ] = useState( false );
    return (
        <>
            <IonItem>
                <IonLabel
                    position = "floating"
                    onClick = { () => openModal( true ) }
                >
                    { contentLabel }
                </IonLabel>
            </IonItem>
            <IonModal
                isOpen = { open }
                onDidDismiss = { () => openModal( false ) }
            >

            </IonModal>
        </>
    )
}
