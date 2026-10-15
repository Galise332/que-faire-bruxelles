@echo off
cd /d C:\Users\moura\que-faire-bruxelles
if not exist routine\logs mkdir routine\logs
claude.exe -p --dangerously-skip-permissions < routine\PROMPT.md >> routine\logs\%date:~6,4%-%date:~3,2%-%date:~0,2%.log 2>&1
