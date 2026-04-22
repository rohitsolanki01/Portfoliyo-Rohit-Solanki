import React from 'react'
import {
  Code2,
  Smartphone,
  Palette,
  Wrench,
  ServerCog,
  Github,
  Database,
} from 'lucide-react'
import { Radar, IconContainer } from './ui/radar-effect'

export default function RadarEffectDemo() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black px-4">
      <div className="relative flex h-120 w-full max-w-3xl flex-col items-center justify-center space-y-4 overflow-hidden">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Web Development"
              delay={0.2}
              icon={<Code2 className="h-7 w-7 text-slate-300" />}
            />
            <IconContainer
              delay={0.4}
              text="Mobile Apps"
              icon={<Smartphone className="h-7 w-7 text-slate-300" />}
            />
            <IconContainer
              text="UI Design"
              delay={0.3}
              icon={<Palette className="h-7 w-7 text-slate-300" />}
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              text="Maintenance"
              delay={0.5}
              icon={<Wrench className="h-7 w-7 text-slate-300" />}
            />
            <IconContainer
              text="Infra Ops"
              delay={0.8}
              icon={<ServerCog className="h-7 w-7 text-slate-300" />}
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="GitHub Workflow"
              icon={<Github className="h-7 w-7 text-slate-300" />}
            />
            <IconContainer
              delay={0.7}
              text="Data Layer"
              icon={<Database className="h-7 w-7 text-slate-300" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-41 h-px w-full bg-linear-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </div>
  )
}
