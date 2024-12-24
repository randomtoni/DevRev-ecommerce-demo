"use client"
import { useEffect } from "react";

export const ClientHooks = (props) => {

    useEffect(() => {
        if (typeof window == "undefined") return
        window.plugSDK.init({
            app_id: process.env.NEXT_PUBLIC_DEVREV_PLUG_WIDGET_TOKEN,
            // disable_plug_chat_window: true
        })
    }, [typeof window == "undefined"]);
  
    return null

}