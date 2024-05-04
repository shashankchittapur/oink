"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"

const technologies = [
    {
        id: "webdevelopment",
        label: "Web Development",
    },
    {
        id: "mobiledevelopment",
        label: "Mobile Development",
    },
    {
        id: "customdevelopment",
        label: "Custom Development",
    },
    {
        id: "productdevelopment",
        label: "Product Development",
    },
    {
        id: "Oracle Applications",
        label: "Oracle Applications",
    },
    {
        id: "sap",
        label: "SAP",
    },
    {
        id: "eCommerce",
        label: "eCommerce",
    },
    {
        id: "uiux",
        label: "UI/UX Design",
    },
    {
        id: "marketing",
        label: "Marketing",
    },
] as const

const contactUsFormSchema = z.object({
    firstName: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    lastName: z
        .string()
        .min(2, {
            message: "Name must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    email: z.string().email({
        message: "Please enter a valid email.",
    }),
    jobTitle: z.string().min(2, {
        message: "Job title must be at least 2 characters.",
    }),
    company: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    phoneNumber: z.number().min(10, {
        message: "Phone number must be at least 10 characters.",
    }),
    technologies: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
    message: z.string().min(2, {
        message: "Message must be at least 2 characters.",
    }),

})

type AccountFormValues = z.infer<typeof contactUsFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
}

export function ContactUsForm() {
    const form = useForm<AccountFormValues>({
        resolver: zodResolver(contactUsFormSchema),
        defaultValues,
    })

    function onSubmit(data: AccountFormValues) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="First Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Last Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Work Email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Job Title" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="Company Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Input placeholder="8123456789" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="technologies"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormDescription>
                                    What type of project do you have in mind?
                                </FormDescription>
                            </div>
                            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                                {technologies.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="technologies"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item.id
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                            </div>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>

                            <FormControl>
                                <Textarea placeholder="Your message/question" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form >
    )
}