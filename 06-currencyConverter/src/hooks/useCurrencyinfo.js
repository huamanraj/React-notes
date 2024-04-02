import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
       const [data, setData] = useState({});
       useEffect(()=> {
        fetch(`https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_GysJtC4ErxvdehfojIRm2Tg29WknUaIQpbLwMu8k&currencies=EUR%2CUSD%2CCAD`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
       }, [currency]);
       return data;
}

export default useCurrencyInfo;