"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

interface SpiderChartProps {
  scores: {
    panorama: number;
    urgencia: number;
    logro: number;
    situacion: number;
    organizacion: number;
  };
}

export function SpiderChart({ scores }: SpiderChartProps) {
  const data = [
    { subject: 'Panorama', A: scores.panorama, fullMark: 100 },
    { subject: 'Urgencia', A: scores.urgencia, fullMark: 100 },
    { subject: 'Logro', A: scores.logro, fullMark: 100 },
    { subject: 'Situación', A: scores.situacion, fullMark: 100 },
    { subject: 'Organización', A: scores.organizacion, fullMark: 100 },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12, fontWeight: 500 }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          <Radar
            name="PULSO"
            dataKey="A"
            stroke="#1E3A5F"
            fill="#2E86AB"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
