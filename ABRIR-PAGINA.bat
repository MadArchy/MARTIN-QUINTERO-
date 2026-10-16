@echo off
cd /d "%~dp0web"
echo.
echo  ============================================
echo   MARTIN SOLDADURA ESPECIALIZADA
echo   Pagina HTML/CSS/JS
echo  ============================================
echo.
echo  Abriendo http://localhost:3000
echo  (No uses el puerto viejo de Next.js)
echo.
start "" "http://localhost:3000"
npx --yes serve -l 3000
pause
