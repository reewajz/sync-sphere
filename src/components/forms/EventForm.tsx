import { useForm } from "react-hook-form"
import { z } from "zod"
import { eventFormSchema } from "@/schema/events"
import {zodResolver} from "@hookform/resolvers/zod";

export function EventForm() {
    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: {
            isActive: true,
            durationInMinutes: 30
        }
    })

}