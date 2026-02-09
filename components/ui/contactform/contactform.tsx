// contactform component file

"use client";

import { urlFor } from "@/sanity/lib/image"
import PortableTextRenderer from "@/components/portable-text-renderer";
import { Button } from "../button";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../textarea";
import React, { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

function ContactForm({
    title,
    description,
    button_text,
    side_image,
} : {
    title: string,
    description: any,
    button_text: string,
    side_image: Sanity.Image
}) {
    const pathname = usePathname() || "/";
    const isEn = pathname === "/en" || pathname.startsWith("/en/");

    let imageUrl = urlFor(side_image.asset).url()
    let captchaRef = useRef<HCaptcha>(null);
    let [hCaptchaToken, setHCaptchaToken] = useState<string | null>(null);
    let [formData, setFormData] = useState({
        email: "",
        name: "",
        surname: "",
        business_name: "",
        request: "",
        description: "",
    })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!hCaptchaToken) {
            toast.error(isEn ? "hCAPTCHA verification failed. Please complete the hCAPTCHA." : "Verifica hCAPTCHA fallita. Per favore, completa il hCAPTCHA.");
            return;
        }

        try {
            const response = await fetch("/api/contactform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name,
                    surname: formData.surname,
                    businessName: formData.business_name,
                    requestType: formData.request,
                    description: formData.description,
                    hCaptchaToken: hCaptchaToken,
                    language: isEn ? "en" : "it",
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                // Se il problema è hCaptcha, resetta e forza una nuova verifica
                if (data.error && (data.error.includes('hCaptcha') || data.error.includes('captcha'))) {
                    console.log('Captcha error detected, resetting captcha');
                    captchaRef.current?.resetCaptcha();
                    setHCaptchaToken(null);
                }

                throw new Error(data?.message || (isEn ? "Submission failed" : "Invio non riuscito"))
            }
            toast.success(data?.message || (isEn ? "Contact request successfully registered." : "Richiesta di contatto registrata con successo."));
        } catch (error) {
            toast.error(error instanceof Error ? error.message : (isEn ? "Error during submission. Please try again in a few seconds." : "Errore durante l'invio. Riprovare tra qualche secondo."));
        } finally {
            // Reset del form e del captcha dopo il tentativo di invio
            setFormData({
                email: "",
                name: "",
                surname: "",
                business_name: "",
                request: "",
                description: "",
            });
            captchaRef.current?.resetCaptcha();
            setHCaptchaToken(null);
        }
    }

    async function handleCaptchaSubmission(token: string) {
        console.log('New hCaptcha token received:', {
            hasToken: !!token,
            tokenLength: token?.length,
            tokenPreview: token ? `${token.substring(0, 20)}...` : 'none'
        });

        // Validazione robusta del token hCAPTCHA
        if (token && typeof token === 'string' && token.length > 20) {
            setHCaptchaToken(token);
            console.log('hCaptcha token saved, ready for submission');
        } else {
            setHCaptchaToken(null);
            console.log('Invalid or missing hCaptcha token');
        }
    }

    return (
        <Dialog>
            <div className="grid grid-cols-2 bg-muted">
                <div className="bg-no-repeat bg-cover" style={{backgroundImage: `url(${imageUrl})`,  backgroundPosition: "-15% 30%"}}></div>
                <div className="flex flex-col px-8 py-16 gap-4">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <div className="lg:w-1/2">
                        <PortableTextRenderer value={description} />
                    </div>
                    <DialogTrigger asChild className="lg:w-1/3">
                        <Button>{button_text}</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md z-[60]">
                        <DialogHeader>
                            <DialogTitle>{isEn ? "Contact Us" : "Contattaci"}</DialogTitle>
                            <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="email">{isEn ? "Email" : "Email"}</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="name">{isEn ? "First Name" : "Nome"}</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="surname">{isEn ? "Last Name" : "Cognome"}</Label>
                                <Input
                                    id="surname"
                                    type="text"
                                    value={formData.surname}
                                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="business_name">{isEn ? "Company" : "Azienda"}</Label>
                                <Input
                                    id="business_name"
                                    type="text"
                                    value={formData.business_name}
                                    onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="request">{isEn ? "Request" : "Richiesta"}</Label>
                                <Input
                                    id="request"
                                    type="text"
                                    value={formData.request}
                                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="description">{isEn ? "Description" : "Descrizione"}</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                            <div className="relative z-[70]">
                                <HCaptcha
                                    ref={captchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                                    onVerify={handleCaptchaSubmission}
                                    onExpire={() => setHCaptchaToken(null)}
                                    onError={() => setHCaptchaToken(null)}
                                />
                                <p className="text-xs my-2">{isEn ? 'By clicking "Submit" you declare that you have read the privacy policy.' : 'Cliccando "Invia" si dichiara di aver preso visione dell’informativa per il trattamento dei dati personali.'}</p>
                            </div>

                            <Button type="submit" size="sm" className="px-3">
                                {isEn ? "Submit" : "Invia"}
                            </Button>
                        </form>
                        <DialogFooter className="sm:justify-end">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">{isEn ? "Close" : "Chiudi"}</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </div>
            </div>
        </Dialog>
    )
}
export default ContactForm
