import React, {useState, useEffect, useRef} from 'react'

export default function Home() {
    const [remainingDays, setRemainingDays] = useState(0)
    const [remainingHours, setRemainingHours] = useState(0)
    const [remainingMinutes, setRemainingMinutes] = useState(0)
    const [remainingSeconds, setRemainingSeconds] = useState(0)

    const twoDigitsNumber = (number) =>{
        if(number < 10){
            return `0${number}`
        }
        return number
    }
    
    
    useEffect(() =>{
        const interval = setInterval(() =>{
            const date = Date.now()
            const futureDate = new Date(2023,0)
            const deadLine = futureDate.getTime() - date
            
            const days = Math.floor(deadLine / 1000 / 60 / 60 / 24)
            const hours = Math.floor(deadLine % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(deadLine % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(deadLine % (1000 * 60) / 1000)


            setRemainingDays(twoDigitsNumber(days))
            setRemainingHours(twoDigitsNumber(hours))
            setRemainingMinutes(twoDigitsNumber(minutes))
            setRemainingSeconds(twoDigitsNumber(seconds))


            
        },1000)
        return () => clearInterval(interval)
    },[])


    return (

        <>
            <h1 className="title">Contagem regressiva fim de ano</h1>
            <main>
                <section className="count-down-container">
                    <div className="days">{remainingDays}</div>
                    <div className="hours">{remainingHours}</div>
                    <div className="minutes">{remainingMinutes}</div>
                    <div className="seconds">{remainingSeconds}</div>
                </section>
                
            </main>
        </>
        
    )
}
