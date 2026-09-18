@echo off
cd /d "%~dp0"
echo =====================================================
echo   Fixing and Pushing All Files to GitHub...
echo =====================================================
echo.

echo [1/5] Initializing Git...
git init

echo [2/5] Setting Git user credentials...
git config user.email "mukeshmk18@users.noreply.github.com"
git config user.name "mukeshmk18"

echo [3/5] Setting remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/mukeshmk18/soap.git
git branch -M main

echo [4/5] Forcibly staging the 'src' folder and all project files...
git add -f src
git add -A

echo Creating commit...
git commit -m "fix: add complete src directory and all project files for Vercel"

echo.
echo [5/5] Pushing to GitHub (branch: main)...
git push -u origin main --force

echo.
echo =====================================================
echo   DONE! Check your repository:
echo   https://github.com/mukeshmk18/soap
echo.
echo   Verify you see the 'src' folder in the repo list!
echo =====================================================
pause
