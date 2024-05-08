# Individuellt projekt med frontendramverk

Uppgift: 
- Din uppgift är att utveckla en interaktiv Single Page Application (SPA) som fungerar som ett digitalt CV/en personlig hemsida med hjälp av ett Javascript ramverk. Webbappen ska presentera information om dig själv, såsom dina färdigheter, erfarenheter, projekt och/eller kontaktinformation.


Följ dessa steg för att köra projektet:
1. Klona git-repot:
   - Öppna terminalen och kör kommandot `git clone <repo-url>` för att klona repot till din dator.
2. Navigera till projektmappen:
   - Använd kommandot `cd <projektmapp>` för att gå till den katalog där din React-app finns.
3. Installera beroenden:
   - Kör kommandot `npm install` för att installera alla projektets beroenden.
4. Starta utvecklingsservern:
   - Skriv `npm start` och tryck Enter för att starta den inbyggda utvecklingsservern.
5. Öppna webbläsaren och gå till `http://localhost:3000`.

## Beskrinvning av funktionerna:

### React Router
Jag har använt mig utav **React Router** för att skapa 3 olika sektioner:
**About**: Här får du en snabb översikt över vem jag är. (Denna text har genererats av en AI.)
**PROJECTS**:  Utforska mina GitHub-repositorier i denna sektion.
**CONTACT**: En enkel sektion med en knapp för att öppna ditt e-postprogram på datorn.

### Redux
I projektet så finns det en funktion som ändrar den primära bakgrundsbilden till en annan. 
Bakgrundsbilderna är på två olika mönster där det ena har vågiga streck och den andra bilden har raka streck.
Bilderna ändras med hjälp av en knapp.

### API
Om du navigerar till PROJECTS så hittar du alla mina projekt som finns på min GitHub-profil. 
Jag använder GitHub API för att hämta data från min profil och sedan renderar jag namnet på repot tillsammans med en länk som låter dig navigera till repot.
