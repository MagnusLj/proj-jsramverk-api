Här ska jag berätta om val av teknik. Det är en express-server. Den är baserad på me-api:t jag har använt under kursen. 
Användaren kan registrera sig och då läggs uppgifterna in i databasen users. Lösenord krypteras med bcrypt. 
Jag har också lagt in antal frukter (0) från början och pengar (100000 från början) i samma databas så att det hamnar på varje användares rad. Sen så hämtas de uppgifterna i frontenden med hjälp av
 användarens e-mail som måste vara unik. När användaren i frontend köper eller säljer frukter eller sätter in eller tar ut pengar så räknas det först ut på sidan och skickas sedan till databasen. Ursäkta om den här texten är lite konstigt formatterad, Atom kunde inte hitta den här README-filen så jag fick skriva det här i nano. 
