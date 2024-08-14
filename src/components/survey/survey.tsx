"use client"

import React from 'react';
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis, Cell } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const dataQ5 = [
    { label: "Never", value: 4, fill: "#2C9B93" },       // Lochinvar
    { label: "Rarely", value: 2, fill: "#E9C16E" },      // Rob Roy
    { label: "Sometimes", value: 1, fill: "#234352" },   // Blue Dianne
    { label: "Always", value: 1, fill: "#E46C54" },      // Terracotta
    { label: "Often", value: 0, fill: "#F3A564" },       // Sandy Brown
];

const dataQ6 = [
    { label: "S. Disagree", value: 0, fill: "#E46C54" },  // Terracotta
    { label: "Disagree", value: 4, fill: "#234352" },     // Blue Dianne
    { label: "Neutral", value: 1, fill: "#E9C16E" },      // Rob Roy
    { label: "Agree", value: 3, fill: "#2C9B93" },        // Lochinvar
    { label: "S. Agree", value: 0, fill: "#F3A564" },     // Sandy Brown
];

const dataQ7 = [
    { label: "S. Disagree", value: 0, fill: "#E46C54" },  // Terracotta
    { label: "Disagree", value: 1, fill: "#234352" },     // Blue Dianne
    { label: "Neutral", value: 4, fill: "#E9C16E" },      // Rob Roy
    { label: "Agree", value: 1, fill: "#2C9B93" },        // Lochinvar
    { label: "S. Agree", value: 2, fill: "#F3A564" },     // Sandy Brown
];

const chartConfigQ5 = {
    value: {
        label: "Responses",
    },
} satisfies ChartConfig;

const chartConfigQ6 = {
    visitors: {
        label: "Responses",
    },
    "S. Disagree": {
        label: "S. Disagree",
        color: "hsl(var(--chart-1))",
    },
    Disagree: {
        label: "Disagree",
        color: "hsl(var(--chart-2))",
    },
    Neutral: {
        label: "Neutral",
        color: "hsl(var(--chart-3))",
    },
    Agree: {
        label: "Agree",
        color: "hsl(var(--chart-4))",
    },
    "S. Agree": {
        label: "S. Agree",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

const chartConfigQ7 = {
    visitors: {
        label: "Responses",
    },
    "S. Disagree": {
        label: "S. Disagree",
        color: "hsl(var(--chart-1))",
    },
    Disagree: {
        label: "Disagree",
        color: "hsl(var(--chart-2))",
    },
    Neutral: {
        label: "Neutral",
        color: "hsl(var(--chart-3))",
    },
    Agree: {
        label: "Agree",
        color: "hsl(var(--chart-4))",
    },
    "S. Agree": {
        label: "S. Agree",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function SurveyChartQ5() {
    return (
        <Card className="h-96">
            <CardHeader>
                <CardTitle>Generative AI-image Tool Usage</CardTitle>
                <CardDescription>Have you used generative AI-image tools before?</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfigQ5}>
                    <BarChart accessibilityLayer data={dataQ5} layout="vertical">
                        <CartesianGrid vertical={false} />
                        <XAxis
                            type="number"
                            hide
                        />
                        <YAxis
                            dataKey="label"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="value"
                            strokeWidth={2}
                            radius={8}
                            activeIndex={2}
                            activeBar={({ ...props }) => {
                                return (
                                    <Rectangle
                                        {...props}
                                        fillOpacity={0.8}
                                        stroke={props.payload.fill}
                                        strokeDasharray={4}
                                        strokeDashoffset={4}
                                    />
                                )
                            }}
                        >
                            {dataQ5.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

export function SurveyChartQ6() {
    return (
        <Card className="h-96">
            <CardHeader>
                <CardTitle>Understanding of Generative AI-image Tools</CardTitle>
                <CardDescription>I understand how generative AI-image tools work.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfigQ6}>
                    <BarChart accessibilityLayer data={dataQ6} layout="vertical">
                        <CartesianGrid vertical={false} />
                        <XAxis
                            type="number"
                            hide
                        />
                        <YAxis
                            dataKey="label"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="value"
                            strokeWidth={2}
                            radius={8}
                            activeIndex={2}
                            activeBar={({ ...props }) => {
                                return (
                                    <Rectangle
                                        {...props}
                                        fillOpacity={0.8}
                                        stroke={props.payload.fill}
                                        strokeDasharray={4}
                                        strokeDashoffset={4}
                                    />
                                )
                            }}
                        >
                            {dataQ6.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

export function SurveyChartQ7() {
    return (
        <Card className="h-96">
            <CardHeader>
                <CardTitle>Contribution to Artistic Innovation</CardTitle>
                <CardDescription>I believe that generative AI-image tools will contribute to artistic innovation and exploration.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfigQ7}>
                    <BarChart accessibilityLayer data={dataQ7} layout="vertical">
                        <CartesianGrid vertical={false} />
                        <XAxis
                            type="number"
                            hide
                        />
                        <YAxis
                            dataKey="label"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="value"
                            strokeWidth={2}
                            radius={8}
                            activeIndex={2}
                            activeBar={({ ...props }) => {
                                return (
                                    <Rectangle
                                        {...props}
                                        fillOpacity={0.8}
                                        stroke={props.payload.fill}
                                        strokeDasharray={4}
                                        strokeDashoffset={4}
                                    />
                                )
                            }}
                        >
                            {dataQ7.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

const SurveyCharts = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SurveyChartQ5 />
        <SurveyChartQ6 />
        <SurveyChartQ7 />
    </div>
);

export default SurveyCharts;
