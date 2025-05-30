/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Markdown formated context to be injected at the beginning of each chat session.
 *
 * For sections, use h2-h6.
 * For data tables, use `csv` code sections, `json` code sections, or |Markdown tables|.
 */
export const context = `
Welcome to GDG Summit 2025!

The SSA GDG Summit 2025 is a two-day event designed specifically for Google Developer Group (GDG) leads from across the Sub-Saharan Africa region. 
This event provides a focused environment for all leads to connect with peers, participate in valuable learning sessions, and collaboratively strategize 
on how to effectively grow and nurture the developer ecosystem within their local communities and the region as a whole.

Here are our **16** sessions (each one takes 45 minutes):

## Opening Keynote
Tags: Collaboration, community
Time: 10:30
Day: Day 1
Location: Conference Hall
Abstract: The developer Community in Africa is growing rapidly, with a focus on innovation and collaboration. This keynote will explore the current state of the developer ecosystem in Africa, highlighting key trends, challenges, and opportunities for growth.


## Panel 1 - Scaling Technical Workshops
Tags: Collaboration, community
Time: 11:00
Day: Day 1
Location: Conference Hall
Abstract: This panel will discuss strategies for scaling technical workshops across GDG communities in Africa. Panelists will share their experiences and best practices for organizing successful workshops, engaging participants, and fostering a culture of learning and collaboration.
 

## Lightning Talk
Tags: community
Time: 11:45
Day: Day 1
Location: Conference Hall
Abstract: A series of short, impactful talks from GDG leads sharing their experiences, challenges, and successes in building and nurturing developer communities across Sub-Saharan Africa.


## Beyond Organizing
Tags: Collaboration, community
Time: 12:00
Day: Day 1
Location: Conference Hall
Abstract: This session will explore the role of GDG leads beyond organizing events. It will cover topics such as community building, mentorship, and fostering innovation within local developer ecosystems.


## Best practices for managing GDG
Tags: Collaboration, community
Time: 12:30
Day: Day 1
Location: Conference Hall
Abstract: This session will provide practical tips and best practices for managing GDG chapters effectively. Topics will include community engagement, event planning, and leveraging Google resources to support local developer communities.


## Co-creating a partnership deck for the community
Tags: Collaboration, community, sponsorship
Time: 13:05
Day: Day 1
Location: Conference Hall
Abstract: This interactive session will guide GDG leads in co-creating a partnership deck that can be used to attract sponsors and partners for their local communities. Participants will collaborate to develop key messaging, value propositions, and partnership opportunities.


## lunch + networking + photo session
Tags: lunch, networking
Time: 13:45
Day: Day 1
Location: Conference Hall
Abstract: Enjoy a lunch break while networking with fellow GDG leads. This is an opportunity to connect, share experiences, and build relationships within the community. A group photo session will also take place during this time.


## Create a Generative Chat App with Vertex AI Conversation
Tags: GenAI, Firebase
Time: 14:45
Day: Day 1
Location: Conference Hall
Abstract: This hands-on session will guide participants through the process of building a generative chat application using Vertex AI Conversation and Firebase. Attendees will learn how to integrate AI-powered chat capabilities into their applications, enhancing user engagement and interaction.

## Strength in Language : How Swahili is Powering Community Engagement
Tags: Collaboration, community
Time: 15:30
Day: Day 1
Location: Conference Hall
Abstract: This session will explore the importance of language in community engagement, focusing on how Swahili is being used to connect and empower developer communities across Sub-Saharan Africa. Participants will learn about successful initiatives and strategies for leveraging language to enhance community participation and collaboration.

## Stretch / Networking Break
Tags: Break, networking
Time: 15:45
Day: Day 1
Location: Conference Hall
Abstract: Take a break to stretch and network with fellow participants. This is an opportunity to relax, recharge, and connect with other GDG leads in a more informal setting.

## Firebase Studio
Tags: Firebase
Time: 15:55
Day: Day 1
Location: Conference Hall
Abstract: This session will provide an overview of Firebase Studio, a powerful tool for building and managing Firebase applications. Participants will learn how to leverage Firebase Studio to streamline their development processes, enhance collaboration, and improve the overall quality of their applications.

## Team Bonding Activity
Tags: Team bonding, collaboration
Time: 16:25
Day: Day 1
Location: Conference Hall
Abstract: Engage in a fun and interactive team bonding activity designed to strengthen relationships among GDG leads. This activity will promote collaboration, communication, and teamwork, fostering a sense of unity and shared purpose within the community.

## Registration and Check-in
Tags: Registration, check-in
Time: 9:00
Day: Day 2
Location: Conference Hall
Abstract: Participants will check in and register for the second day of the GDG Summit. This is an opportunity to ensure all attendees are accounted for and ready to engage in the day's activities.

## Beyond the event: A Legacy Through Documentation
Tags: Documentation, legacy
Time: 10:40
Day: Day 2
Location: Conference Hall
Abstract: This session will emphasize the importance of documentation in preserving the legacy of GDG events and initiatives. Participants will learn best practices for documenting their activities, sharing knowledge, and creating resources that can benefit future generations of developers and GDG leads.

## Google Research Africa Workshop
Tags: Google Research, workshop
Time: 11:00
Day: Day 2
Location: Conference Hall
Abstract: This workshop will provide insights into the latest research and innovations from Google Research Africa. Participants will have the opportunity to engage with researchers, learn about cutting-edge technologies, and explore how these advancements can be applied within their local developer communities.

## Bevy Deepdive + Community Management Hacks + AMA
Tags: Bevy, community management, AMA
Time: 11:45
Day: Day 2
Location: Conference Hall
Abstract: This deep dive session will explore Bevy, a powerful platform for building and managing developer communities. Participants will learn community management hacks, best practices, and have the opportunity to ask questions in an Ask Me Anything (AMA) format.

## Lunch and Photos
Tags: Lunch, photos
Time: 12:30
Day: Day 2
Location: Conference Hall
Abstract: Enjoy a lunch break while networking with fellow GDG leads. This is an opportunity to connect, share experiences, and build relationships within the community. A group photo session will also take place during this time.

## Building a Smart Community Assistant with Agent Development Kit
Tags: Smart community, Agent Development Kit
Time: 13:30
Day: Day 2
Location: Conference Hall
Abstract: This hands-on session will guide participants through the process of building a smart community assistant using the Agent Development Kit. Attendees will learn how to create AI-powered assistants that can enhance community engagement, provide support, and streamline communication within their local developer ecosystems.

## Not Every Community Should Scale - Here's Why
Tags: Community scaling, collaboration
Time: 14:30
Day: Day 2
Location: Conference Hall
Abstract: This session will explore the concept of community scaling, emphasizing that not every community needs to grow exponentially. Participants will learn about the benefits of maintaining smaller, more focused communities and strategies for fostering meaningful connections and collaboration within their local developer ecosystems.

## Build AI-powered web apps with Firebase Extensions for the Gemini API
Tags: AI, Firebase, web apps
Time: 14:45
Day: Day 2
Location: Conference Hall
Abstract: This hands-on session will guide participants through the process of building AI-powered web applications using Firebase Extensions for the Gemini API. Attendees will learn how to integrate AI capabilities into their applications, enhancing user experiences and driving innovation within their local developer communities.

## Chill & Connect
Tags: Networking, relaxation
Time: 15:30
Day: Day 2
Location: Conference Hall
Abstract: Take a break to relax and connect with fellow participants. This is an opportunity to unwind, share experiences, and build relationships within the GDG community in a more informal setting.

## Closing Remarks
Tags: Closing, reflection
Time: 16:15
Day: Day 2
Location: Conference Hall
Abstract: A closing note reflecting on the key takeaways from the GDG Summit, expressing gratitude to participants, and highlighting the importance of continued collaboration and community building among GDG leads in Sub-Saharan Africa.

## Culturally Themed Dinner
Tags: Dinner, culture
Time: 18:00
Day: Day 2
Location: To be announced
Abstract: Join us for a culturally themed dinner to celebrate the diversity and richness of the Sub-Saharan African developer community. This dinner will provide an opportunity to enjoy traditional cuisine, share stories, and strengthen connections among GDG leads from across the region.

`;
