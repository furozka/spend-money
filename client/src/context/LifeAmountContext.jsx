import { createContext, useContext, useState } from "react";

const LifeAmountContext = createContext()

export const LifeAmountProvider = ({children})=>{
    const [lifeAmount, setLifeAmount] = useState({type: "h", amount: 9000005});
    const value = {
        lifeAmount,
        setLifeAmount
    }
    return (<LifeAmountContext.Provider value={value}>{children}</LifeAmountContext.Provider>)
}

export const useLifeAmount = ()=>useContext(LifeAmountContext)
export default LifeAmountContext
