"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { addJobPosting } from '@/lib/career-api'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const locations = [
    { label: "Kurnool", value: "Kurnool" },
    { label: "Hyderabad", value: "Hyderabad" },
    { label: "Bangalore", value: "Bangalore" },
] as const

const technologies = [
    {
        id: "Java",
        label: "Java",
    },
    {
        id: "Springboot",
        label: "Springboot",
    },
    {
        id: "Python",
        label: "Python",
    },
    {
        id: "Mongodb",
        label: "Mongodb",
    },
    {
        id: "Oracle",
        label: "Oracle",
    },
    {
        id: "hibernate",
        label: "hibernate",
    },
] as const

const newJobFormSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: "Job title must be at least 2 characters.",
        })
        .max(30, {
            message: "Name must not be longer than 30 characters.",
        }),
    description: z
        .string()
        .min(2, {
            message: "Job title must be at least 2 characters.",
        })
        .max(200, {
            message: "Name must not be longer than 30 characters.",
        }),
    location: z.string({
        required_error: "Please select a language.",
    }),
    technologies: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one technology.",
    }),
    minimumExperience: z.number(),
    maximumExperience: z.number(),
})

export type NewJobFormValues = z.infer<typeof newJobFormSchema>

// This can come from your database or API.
const defaultValues: Partial<NewJobFormValues> = {
    technologies: ["Java", "Springboot"],
}

export function AccountForm() {
    const form = useForm<NewJobFormValues>({
        resolver: zodResolver(newJobFormSchema),
        defaultValues,
    })

    async function onSubmit(data: NewJobFormValues) {
        try {
            await addJobPosting(data);
            toast({
                title: "Job Added",
                description: "Job added successfully",
            });
        } catch (e) {
            toast({
                title: "Error",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(e, null, 2)}</code>
                    </pre>
                ),
            });
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Job Title" {...field} />
                            </FormControl>
                            <FormDescription>
                                Job title will be displayed in Careers page.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Job Description" {...field} />
                            </FormControl>
                            <FormDescription>
                                Job description will be displayed in Careers page.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Location</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? locations.find(
                                                    (location) => location.value === field.value
                                                )?.label
                                                : "Select location"}
                                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandEmpty>No language found.</CommandEmpty>
                                        <CommandGroup>
                                            {locations.map((location) => (
                                                <CommandItem
                                                    value={location.label}
                                                    key={location.value}
                                                    onSelect={() => {
                                                        form.setValue("location", location.value)
                                                    }}
                                                >
                                                    <CheckIcon
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            location.value === field.value
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                    {location.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormDescription>
                                This is the location where Job is available.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="minimumExperience"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Minimum experience in years</FormLabel>
                            <FormControl>
                                <Input placeholder="Minimum experience"
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        form.setValue("minimumExperience", parseInt(e.target.value))
                                    }}
                                />
                            </FormControl>
                            <FormDescription>
                                Minimum experience will be displayed in Careers page.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="maximumExperience"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Minimum experience in years</FormLabel>
                            <FormControl>
                                <Input placeholder="Maximum experience"
                                    onChange={(e) => {
                                        console.log(e.target.value)
                                        form.setValue("maximumExperience", parseInt(e.target.value))
                                    }}
                                />
                            </FormControl>
                            <FormDescription>
                                Maximum experience will be displayed in Careers page.
                            </FormDescription>
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
                                <FormLabel className="text-base">Technologies</FormLabel>
                                <FormDescription>
                                    Select the technologies matching the job posting.
                                </FormDescription>
                            </div>
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
                                                        checked={
                                                            field.value?.includes(item.id)
                                                        }

                                                        onCheckedChange={(checked) => {
                                                            console.log(checked)
                                                            console.log(`${JSON.stringify(field)}`)
                                                            if (checked) {
                                                                form.setValue("technologies", [
                                                                    ...field.value,
                                                                    item.id,
                                                                ])
                                                            } else {
                                                                form.setValue(
                                                                    "technologies",
                                                                    field.value.filter(
                                                                        (value) => value !== item.id
                                                                    )
                                                                )
                                                            }
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
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Add Job</Button>
            </form>
        </Form>
    )
}