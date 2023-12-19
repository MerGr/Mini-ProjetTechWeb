#set page(
paper: "a4",
margin: (x: 1.8cm, y: 1.5cm),
numbering: "1"
)
#set text(
font: "Linux Libertine",
size: 12pt,
)
#set par(
justify:true,
leading: 0.6em,
)
#set heading(numbering: "1.")
#set quote(block: true)
//-------------------------

= The Pre Historic Times (1970 - 1983)
Before there was Linux, there was GNU, and before even that there was Unix.
Both centric pieces of what makes Linux what it is today.
== The Unix Operating System
Released in 1970 by AT&T, Unix was a widely adopted operating system that featured the novel use of small, efficient and modular programs to achieve complex tasks.

This practice of splitting functionality between programs and letting the user combine them has come to be known as the Unix Philosophy and is now a core part of the Linux experience.
== The Gnu Project
As great as Unix was, it was proprietary software. Most manufacturers at the time began to use restrictive copyright to limit access to source code. This posed a problem for people who closely depended on such software; if there was a problem, bug or missing feature they could no longer fix it themselves. this resulted in much frustration in hacker and engineer circles.

Enter Richard Stallman: in 1983, a hacker in MIT's AI laboratory and an operating systems developper, announces his start on the GNU project; a unix like operating system that features many of the same tools completely rewritten from scratch, but as free software.
Along with his work on GNU, Stallman created the GNU Genreal Public License (GPL) to release along with GNU. A Licence implements copyleft to protect the right to distribute and modify free software.
= Birth (1991 - 1992)
By the early 1990, most of the GNU operating system was complete. That is, except for one important piece that was left to the end: it's kernel!
== Linux
With the GNU kernel - Hurd - still being incomplete and the lack of a widely adopted free kernel to drive his new 80386 processor PC, computer science student Linus Torvalds began the work of his own kernel at the age of 25.

The first publicly released Linux was version *0.01*, described as a free minix-like kernel for the intel 386 architecture for personal computers.

Minix (mini Unix) is another Unix-like system, created by Andrew S. Tanenbaum for educational purposes. However, despite the source code being available, it restricted modification and distribution. It was also the operating system that Linus used to create the first release of Linux.

*0.01* can be considered a historical release today, but at the time it only supported a subset of hardware features: harddisk, screen, keyboard and serial lines. along with some missing systemcalls yet to be implemented, mount and umount for example.

#quote(attribution: [Linus Torvalds - Linux 0.01 Release Notes])[
The guiding line when implementing linux was: get it working fast. I wanted the kernel simple, yet powerful enough to run most unix software. - Linus
]

#pagebreak()

== GNU/Linux
#quote(attribution: [Linus Torvalds - Linux 0.01 Release Notes])[Sadly, a kernel by itself gets you nowhere. To get a working system you need a shell, compilers, a library etc. These are separate parts and may be under a stricter (or even looser) copyright. Most of the tools used with linux are GNU software and are under the GNU copyleft. These tools aren't in the distribution - ask me (or GNU) for more info.]
Since it's inception, Linux has made use of the GNU suite of tools to achieve functionality. This led the two projects to grow in tandem as each side of developpers seeked to create a fully functional operating system with Linux as the kernel.
in 1992, Torvalds licensed his *0.99* version of the kernel under GNU GPL. And as of today, Linux still uses the same license, albeit the newer version GPLv2.
= Growth And Future (1993 - current day)
== The X Window System
By 1992, the only way to use Linux was through the shell and command line, it lacked the graphical support to compete with other OSes on the market. That is until a port of the *X Window System* was ported to Linux by Orest Zborowski in the spring of the same year.
#quote(attribution: [Orest Zborowski - https://www.linuxjournal.com/article/70])[Orest: Version .12 in 1992, I think. It seems like so long ago. I had played with Minix at home but didn't see it as being more than something that would run the ls command. I saw no chance to run X on it. Linux, however, had real memory management and looked like a possible platform for X and I wanted to give a port of X to Linux a try.]
This was a major break for Linux as it finally meant having GUI support.
== The First Distributions
In February of 1992, the Manchester Computing Center released the first Linux distribution complete with many utilities. And the first distro to ship with graphical support out of the box was *Tggdrasil* that came just months later. It's clear that things began developping very fast after this.
== Slackware and Debian
These distros came out in 1993, both of which are still active to this day. Slackware being the oldest distro and Debian the most popular.

== Red Hat Linux

== ...
