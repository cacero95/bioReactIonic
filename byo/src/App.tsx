import { useState } from 'react';
import {
  IonApp, IonContent, IonHeader, IonInput,
  IonItem, IonLabel, IonTitle, IonToolbar,
  IonDatetime, IonModal, IonButton
} from '@ionic/react';
import './App.css';
import { useForm } from './Hooks/useForm';
import { ByoCard } from './Components/ByoCard';
import { formatDate } from './calculation';

interface Props {
  name: string;
  birthDay: string;
  targetDay: string;
}

export const App = () => {

  const { name, birthDay, targetDay, updateForm } = useForm<Props>({
    name: '', birthDay: '', targetDay: ''
  });
  const [ open, openModal ] = useState( false );
  const formatBirth = formatDate( birthDay );

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bio App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">
        <IonItem>
          <IonLabel position = 'floating'>Name: </IonLabel>
          <IonInput
            placeholder = 'Type your name'
            type = 'text'
            onIonChange = {
              ({ detail }) => updateForm( detail.value, 'name' ) 
            }
          />
        </IonItem>
        <IonItem>
          <IonLabel
            position = 'floating'
            onClick = { () => openModal( true ) }
          >
            BirthDate: { birthDay !== '' ? formatDate( birthDay ) : '' }
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel
            position = 'floating'
            onClick = { () => openModal( true ) }
          >
            targetDate: { targetDay !== '' ? formatDate( targetDay ) : '' }
          </IonLabel>
        </IonItem>
        <IonModal
          isOpen = { open }
          onDidDismiss = { () => openModal( false ) }
        >
          <IonContent className = 'ion-text-center'>
            <IonDatetime
              presentation = 'time-date'
              onIonChange = { ({ detail }) => updateForm( detail.value, 'birthDay' ) }
            />
            <IonButton onClick = { () => openModal( false ) }>
              Close
            </IonButton>
          </IonContent>
        </IonModal>
        {
          birthDay !== '' && (
            <IonItem>
              <ByoCard name = { name } date = { birthDay } />
            </IonItem>
          )
        }
      </IonContent>
    </IonApp>
  )
}
