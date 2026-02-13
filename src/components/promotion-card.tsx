"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Role {
  title: string;
  period: string;
  description?: string;
  tasks?: readonly {
    readonly description: string;
    readonly skills: readonly string[];
  }[];
}

interface PromotionCardProps {
  logoUrl?: string | import('next/image').StaticImageData;
  altText: string;
  company: string;
  href?: string;
  badges?: readonly string[];
  roles: Role[];
  titleClassName?: string;
  cardClassName?: string;
}

export const PromotionCard = ({
  logoUrl,
  altText,
  company,
  href,
  badges,
  roles,
  titleClassName,
  cardClassName,
}: PromotionCardProps) => {
  return (
    <div className="block">
      <Card className={cn("flex flex-col transition-all duration-300 ease-out hover:shadow-lg", cardClassName)}>
        {/* Company Header */}
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
                      {company}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ) : (
                    <span>{company}</span>
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
              </div>
              {/* All roles on same line - matching ResumeCard subtitle placement */}
              <div className="font-sans text-xs">
                {roles.map((role, roleIndex) => (
                  <span key={roleIndex}>
                    {roleIndex > 0 && ", "}
                    {role.title}
                  </span>
                ))}
              </div>
            </CardHeader>
          </div>
        </div>

        {/* Roles content - Each role formatted like ResumeCard */}
        {roles.map((role, roleIndex) => (
          <React.Fragment key={roleIndex}>

            {/* Description Section - matches ResumeCard */}
            {role.description && (
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
                  {role.description}
                </motion.div>
              </CardContent>
            )}

            {/* Tasks Section - matches ResumeCard */}
            {role.tasks && role.tasks.length > 0 && (
              <CardContent className="pt-2 pb-4">
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-foreground mb-2">Key Contributions:</h4>
                  <ul className="space-y-3">
                    {role.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-xs sm:text-sm">
                        <div className="flex gap-2">
                          <span className="text-primary">•</span>
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
          </React.Fragment>
        ))}
      </Card>
    </div>
  );
};
