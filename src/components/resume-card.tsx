"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl?: string | import('next/image').StaticImageData;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  tasks?: readonly {
    readonly description: string;
    readonly skills: readonly string[];
  }[];
  titleClassName?: string;
  cardClassName?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  tasks,
  titleClassName,
  cardClassName,
}: ResumeCardProps) => {
  return (
    <div className="block">
      <Card className={cn("flex flex-col transition-all duration-300 ease-out hover:shadow-lg", cardClassName)}>
        <div className="flex">
          <div className="flex-none">
            <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
              {logoUrl && (
                <AvatarImage
                  src={typeof logoUrl === 'string' ? logoUrl : logoUrl.src}
                  alt={altText}
                  className="object-cover"
                />
              )}
              <AvatarFallback>{altText[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-grow ml-4 items-center flex-col group">
            <CardHeader>
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className={cn("inline-flex items-center mr-4 justify-center font-semibold leading-none text-xs sm:text-sm", titleClassName)}>
                  {href && href !== "#" ? (
                    <Link href={href} className="inline-flex items-center gap-1 hover:underline">
                      {title}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ) : (
                    <span>{title}</span>
                  )}
                  {badges && (
                    <span className="inline-flex gap-x-1 ml-2">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </h3>
                <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                  {period}
                </div>
              </div>
              {subtitle && <div className="font-sans text-xs ">{subtitle}</div>}
            </CardHeader>
          </div>
        </div>
        
        {/* Description Section */}
        {description && (
          <CardContent className="pt-2 pb-2">
            <motion.div
              initial={{ opacity: 1, height: "auto" }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs sm:text-sm text-muted-foreground"
            >
              {description}
            </motion.div>
          </CardContent>
        )}

        {/* Detailed Tasks Section */}
        {tasks && tasks.length > 0 && (
          <CardContent className="pt-2 pb-4">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-foreground mb-2">Key Contributions:</h4>
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li key={index} className="text-xs sm:text-sm">
                    <div className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <div className="flex-1">
                        <p className="text-foreground leading-relaxed mb-2">
                          {task.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {task.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-[10px] sm:text-xs px-2 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
