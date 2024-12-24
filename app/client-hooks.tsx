"use client"
import { useEffect } from "react";

export const ClientHooks = (props) => {
    let initiated = false
    useEffect(() => {
        if (initiated || typeof window == "undefined" || !window.plugSDK) return
        window.plugSDK.init({
            app_id: process.env.NEXT_PUBLIC_DEVREV_PLUG_WIDGET_TOKEN,
        })
        initiated = true
    }, [typeof window == "undefined", typeof window == "undefined" ? null : !window.plugSDK ]);
  
    return null

}