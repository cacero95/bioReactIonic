import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react"
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorhythm, formatDate } from '../calculation';

interface Props {
    name: string;
    date: string;
}

const data = [
  { date: '2020-02-01', physical: 0.99, emotional: 0.5, intellectual: -0.25 },
  { date: '2020-02-02', physical: 0.27, emotional: 0.5 + 2, intellectual: -0.25 - 5 },
  { date: '2020-02-03', physical: 0.50, emotional: 0.5 + 3, intellectual: -0.25 - 6 },
  { date: '2020-02-04', physical: 0.80, emotional: 0.5 + 4, intellectual: -0.25 - 8 },
]

export const ByoCard = ({ name, date }: Props) => {
  
  const format = formatDate( date );

  const buildByo = () => {
    const { physical, emotional, intellectual } = calculateBiorhythm(
      format, new Date().toISOString()
    );
    return (
      <>
        <p>
          physical: { physical }
        </p>
        <p>
          emotional: { emotional }
        </p>
        <p>
          intellectual: { intellectual }
        </p>
      </>
    )
  }

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          Profile detail
        </IonCardTitle>
        <IonCardSubtitle>
          { format }
        </IonCardSubtitle>
        <IonCardContent>
          <p>
            Name: { name }
          </p>
          <ResponsiveContainer
            width = { 300 }
            height = { 200 }
          >
            <LineChart data = { data }>
              <XAxis dataKey = "date"/>
              <Line 
                dot = { true }
                stroke = "green"
                dataKey = "physical"/>
              <ReferenceLine x = '2020-02-02'/>
              <CartesianGrid
                vertical = { false }
                strokeDasharray = "3 3"
              />
              <Line 
                dot = { true }
                stroke = "red"
                dataKey = "emotional"/>
              <Line 
                dot = { true }
                stroke = "blue"
                dataKey = "intellectual"/>
            </LineChart>
          </ResponsiveContainer>

          {
            date ? buildByo() : (
              <p>Por favor completar fecha de nacimiento</p>
            )
          }
        </IonCardContent>
      </IonCardHeader>
    </IonCard>
  )
}
