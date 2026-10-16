@echo off
cd /d C:\Users\moura\que-faire-bruxelles
if not exist routine\logs mkdir routine\logs
for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd"') do set D=%%i
claude.exe -p --dangerously-skip-permissions < routine\PROSPECTION.md >> routine\logs\prospection-%D%.log 2>&1
