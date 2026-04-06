// exercises.js
// Contient toutes les données des exercices pour les trois niveaux

const grammarData = {
    beginner: {
        name: "Beginner",
        themes: [
            {
                name: "Verbes de base",
                exercises: [
                    { question: "I ___ a student.", options: ["am","is","are","be"], correct: 0, explanation: "Le verbe 'to be' avec 'I' donne 'am'." },
                    { question: "She ___ to school every day.", options: ["go","goes","going","went"], correct: 1, explanation: "He/She/It + verbe en -s → 'goes'." },
                    { question: "They ___ playing football now.", options: ["is","am","are","be"], correct: 2, explanation: "'They' prend 'are' au présent continu." },
                    { question: "We ___ a new car.", options: ["has","have","having","haves"], correct: 1, explanation: "'We' + 'have' (possession)." },
                    { question: "He ___ breakfast at 8 am.", options: ["have","has","having","to have"], correct: 1, explanation: "He/She/It + has." },
                    { question: "___ you like ice cream?", options: ["Does","Do","Is","Are"], correct: 1, explanation: "Question avec 'do' pour les verbes ordinaires." },
                    { question: "My brother ___ very fast.", options: ["run","runs","running","to run"], correct: 1, explanation: "Troisième personne singulier → runs." },
                    { question: "Let's ___ to the cinema.", options: ["go","goes","going","went"], correct: 0, explanation: "Après 'let's' on utilise la base verbale." },
                    { question: "She ___ her homework now.", options: ["do","does","doing","is doing"], correct: 3, explanation: "Présent continu: is doing." },
                    { question: "They ___ happy yesterday.", options: ["was","were","is","are"], correct: 1, explanation: "Passé de 'to be' pour 'they' = were." },
                    { question: "I ___ to London last year.", options: ["go","went","gone","goes"], correct: 1, explanation: "Passé simple de 'go' = went." },
                    { question: "We can ___ French.", options: ["speak","speaks","speaking","spoke"], correct: 0, explanation: "Après 'can' on met le verbe sans to." },
                    { question: "He ___ his keys.", options: ["lose","lost","loses","losing"], correct: 1, explanation: "Past simple: lost." },
                    { question: "___ he a doctor?", options: ["Is","Are","Do","Does"], correct: 0, explanation: "Avec 'he' et adjectif/ nom on utilise 'is'." },
                    { question: "The dog ___ barking loudly.", options: ["is","are","am","be"], correct: 0, explanation: "Dog (singulier) + is." },
                    { question: "They ___ not coming tonight.", options: ["is","am","are","be"], correct: 2, explanation: "They are not / aren't." },
                    { question: "I need ___ some water.", options: ["drink","to drink","drinking","drank"], correct: 1, explanation: "need + to + verbe." },
                    { question: "She always ___ coffee in the morning.", options: ["drink","drinks","is drink","drinking"], correct: 1, explanation: "Habitude → présent simple 3e pers." },
                    { question: "We ___ watching a movie at 9pm.", options: ["will","are","is","am"], correct: 1, explanation: "Present continuous pour futur proche." },
                    { question: "The children ___ playing outside.", options: ["is","am","are","be"], correct: 2, explanation: "Children (pluriel) → are." }
                ]
            },
            {
                name: "Pronoms",
                exercises: [
                    { question: "___ am going to the park.", options: ["You","He","I","She"], correct: 2, explanation: "Le pronom sujet 'I' s'utilise avec 'am'." },
                    { question: "Please give ___ the book.", options: ["I","me","my","mine"], correct: 1, explanation: "Complément d'objet → 'me'." },
                    { question: "This is Mary. ___ is my sister.", options: ["He","She","It","They"], correct: 1, explanation: "Mary est féminin → 'She'." },
                    { question: "John and I are friends. ___ play together.", options: ["We","They","He","She"], correct: 0, explanation: "John et moi = we." },
                    { question: "Look at the cat. ___ is sleeping.", options: ["He","She","It","They"], correct: 2, explanation: "Animal / objet → 'it'." },
                    { question: "These are my keys. ___ are on the table.", options: ["It","He","She","They"], correct: 3, explanation: "Keys (pluriel) → they." },
                    { question: "Is this pen ___ ?", options: ["you","your","yours","yourselves"], correct: 2, explanation: "Pronom possessif : 'yours' = le tien." },
                    { question: "She cooked dinner by ___ .", options: ["her","hers","herself","she"], correct: 2, explanation: "Réfléchi → herself." },
                    { question: "This car belongs to Tom. It's ___ .", options: ["him","his","he","he's"], correct: 1, explanation: "Possessif: his." },
                    { question: "___ are going to the party tonight.", options: ["We","Us","Our","Ours"], correct: 0, explanation: "Sujet → we." },
                    { question: "I saw ___ at the cinema.", options: ["they","them","their","theirs"], correct: 1, explanation: "Complément d'objet → them." },
                    { question: "She loves ___ new job.", options: ["she","her","hers","herself"], correct: 1, explanation: "Adjectif possessif devant 'job'." },
                    { question: "The book is ___ .", options: ["my","mine","me","I"], correct: 1, explanation: "Pronom possessif: mine." },
                    { question: "Did you see ___ ? (le chien)", options: ["it","him","her","them"], correct: 0, explanation: "Pour un animal neutre : it." },
                    { question: "Paul and Mike? I know ___ .", options: ["they","them","their","theirs"], correct: 1, explanation: "Complément: them." },
                    { question: "___ brother is a teacher.", options: ["My","Mine","Me","I"], correct: 0, explanation: "Adjectif possessif my + brother." },
                    { question: "The students did the homework ___ .", options: ["their","themselves","them","theirs"], correct: 1, explanation: "Par eux-mêmes → themselves." },
                    { question: "Please tell ___ the truth.", options: ["I","me","my","mine"], correct: 1, explanation: "Objet indirect: me." },
                    { question: "___ am hungry.", options: ["I","You","He","She"], correct: 0, explanation: "Sujet I." },
                    { question: "We bought this gift for ___ . (toi)", options: ["you","your","yours","yourself"], correct: 0, explanation: "Objet 'you'." }
                ]
            },
            {
                name: "Prépositions",
                exercises: [
                    { question: "I wake up ___ 7 am.", options: ["in","on","at","by"], correct: 2, explanation: "At pour une heure précise." },
                    { question: "Let's meet ___ Monday.", options: ["in","on","at","for"], correct: 1, explanation: "On pour les jours." },
                    { question: "She lives ___ Paris.", options: ["at","in","on","to"], correct: 1, explanation: "In pour les villes." },
                    { question: "The cat is hiding ___ the table.", options: ["on","under","at","beside"], correct: 1, explanation: "Under = sous." },
                    { question: "I'll be there ___ ten minutes.", options: ["in","on","at","for"], correct: 0, explanation: "In = dans (durée)." },
                    { question: "He is interested ___ music.", options: ["in","at","on","about"], correct: 0, explanation: "Interested in." },
                    { question: "Please put the books ___ the shelf.", options: ["in","on","at","over"], correct: 1, explanation: "On the shelf." },
                    { question: "We walked ___ the park.", options: ["through","across","under","above"], correct: 0, explanation: "Through = à travers." },
                    { question: "She is afraid ___ spiders.", options: ["of","from","by","at"], correct: 0, explanation: "Afraid of." },
                    { question: "I usually go to work ___ foot.", options: ["by","on","with","in"], correct: 1, explanation: "On foot (exception)." },
                    { question: "He's waiting ___ the bus stop.", options: ["at","in","on","to"], correct: 0, explanation: "At the bus stop." },
                    { question: "The restaurant is ___ the corner.", options: ["on","at","in","by"], correct: 1, explanation: "At the corner." },
                    { question: "I'll finish this report ___ Friday.", options: ["by","on","in","at"], correct: 0, explanation: "By = au plus tard." },
                    { question: "She always drinks coffee ___ the morning.", options: ["in","on","at","during"], correct: 0, explanation: "In the morning." },
                    { question: "He fell asleep ___ the movie.", options: ["during","in","at","for"], correct: 0, explanation: "Pendant → during." },
                    { question: "The picture is hanging ___ the wall.", options: ["in","on","at","over"], correct: 1, explanation: "On the wall." },
                    { question: "She is good ___ math.", options: ["in","at","on","for"], correct: 1, explanation: "Good at." },
                    { question: "We drove ___ the tunnel.", options: ["through","across","along","under"], correct: 0, explanation: "Through = à travers tunnel." },
                    { question: "My birthday is ___ December.", options: ["in","on","at","for"], correct: 0, explanation: "In + mois." },
                    { question: "He ran ___ the stairs.", options: ["up","on","in","at"], correct: 0, explanation: "Up the stairs." }
                ]
            },
            {
                name: "Comparatifs / Superlatifs",
                exercises: [
                    { question: "This book is ___ than that one.", options: ["cheaper","cheapest","cheap","more cheap"], correct: 0, explanation: "Comparatif court + -er than." },
                    { question: "She is the ___ student in class.", options: ["smart","smarter","smartest","more smart"], correct: 2, explanation: "Superlatif avec the + -est." },
                    { question: "Today is ___ than yesterday.", options: ["hotter","hottest","hot","more hot"], correct: 0, explanation: "Comparatif irrégulier: hotter." },
                    { question: "This is ___ movie I've ever seen.", options: ["the best","better","good","the good"], correct: 0, explanation: "Superlatif de good = the best." },
                    { question: "My house is ___ from school than yours.", options: ["far","farther","the farthest","more far"], correct: 1, explanation: "Comparatif de far = farther." },
                    { question: "He runs ___ than me.", options: ["fast","faster","fastest","more fast"], correct: 1, explanation: "Adverbe court + -er." },
                    { question: "Which is ___ , the sun or the moon?", options: ["bigger","biggest","more big","the biggest"], correct: 0, explanation: "Comparatif entre deux." },
                    { question: "This puzzle is ___ difficult.", options: ["most","the most","more","the more"], correct: 1, explanation: "Superlatif long: the most difficult." },
                    { question: "Her score is ___ than mine.", options: ["good","better","best","well"], correct: 1, explanation: "Comparatif irrégulier: better." },
                    { question: "That's ___ building in the city.", options: ["tall","taller","the tallest","more tall"], correct: 2, explanation: "Superlatif: the tallest." },
                    { question: "Iron is ___ than wood.", options: ["heavy","heavier","heaviest","more heavy"], correct: 1, explanation: "heavier than." },
                    { question: "This is ___ expensive restaurant.", options: ["the most","most","more","the more"], correct: 0, explanation: "Superlatif." },
                    { question: "She sings ___ than her sister.", options: ["beautifully","more beautifully","most beautifully","beautifuller"], correct: 1, explanation: "Adverbe long → more + adv." },
                    { question: "He is ___ person I know.", options: ["kind","kinder","kindest","the kindest"], correct: 3, explanation: "Superlatif the kindest." },
                    { question: "My results are ___ than before.", options: ["bad","worse","worst","the worst"], correct: 1, explanation: "Comparatif irrégulier: worse." },
                    { question: "This road is ___ in the region.", options: ["long","longer","the longest","more long"], correct: 2, explanation: "Superlatif." },
                    { question: "She feels ___ today.", options: ["happier","happy","happiest","more happy"], correct: 0, explanation: "Comparatif." },
                    { question: "Who is ___ , Tom or Jerry?", options: ["funnier","funniest","funny","more funny"], correct: 0, explanation: "Comparatif." },
                    { question: "This is ___ cake I've ever tasted.", options: ["delicious","more delicious","the most delicious","deliciouser"], correct: 2, explanation: "Superlatif long." },
                    { question: "He is ___ than his brother.", options: ["tall","taller","the tallest","more tall"], correct: 1, explanation: "Comparatif." }
                ]
            },
            {
                name: "Questions simples",
                exercises: [
                    { question: "___ you like pizza?", options: ["Does","Do","Is","Are"], correct: 1, explanation: "Do + you pour verbes ordinaires." },
                    { question: "___ she speak Spanish?", options: ["Do","Does","Is","Are"], correct: 1, explanation: "Does pour she/he/it." },
                    { question: "Where ___ you live?", options: ["do","does","is","are"], correct: 0, explanation: "Question avec do + sujet." },
                    { question: "What time ___ the meeting start?", options: ["do","does","is","are"], correct: 1, explanation: "Meeting (3e pers.) → does." },
                    { question: "___ they coming to the party?", options: ["Is","Are","Do","Does"], correct: 1, explanation: "Are they + coming (be + -ing)." },
                    { question: "How old ___ you?", options: ["is","am","are","be"], correct: 2, explanation: "You → are." },
                    { question: "___ is your best friend?", options: ["Who","What","Where","When"], correct: 0, explanation: "Who pour une personne." },
                    { question: "___ color is your car?", options: ["Which","What","Who","Whose"], correct: 1, explanation: "What color." },
                    { question: "___ bag is this?", options: ["Who","Whose","What","Which"], correct: 1, explanation: "Whose = à qui." },
                    { question: "Why ___ you sad?", options: ["is","are","am","do"], correct: 1, explanation: "You are sad → Are you sad?" },
                    { question: "How ___ sugar do you need?", options: ["many","much","some","any"], correct: 1, explanation: "Much pour indénombrable." },
                    { question: "___ we go to the park?", options: ["Shall","Do","Are","Is"], correct: 0, explanation: "Shall we = suggestion." },
                    { question: "___ you watch TV yesterday?", options: ["Did","Do","Does","Are"], correct: 0, explanation: "Did pour passé simple." },
                    { question: "What ___ you doing now?", options: ["are","is","am","do"], correct: 0, explanation: "Present continuous." },
                    { question: "___ he a doctor?", options: ["Is","Are","Do","Does"], correct: 0, explanation: "To be → Is he?" },
                    { question: "How much ___ these shoes?", options: ["is","are","do","does"], correct: 1, explanation: "Shoes pluriel → are." },
                    { question: "___ you help me, please?", options: ["Can","Do","Are","Does"], correct: 0, explanation: "Can pour demande." },
                    { question: "Which one ___ you prefer?", options: ["do","does","is","are"], correct: 0, explanation: "Do you prefer." },
                    { question: "___ time is it?", options: ["What","Which","When","Who"], correct: 0, explanation: "What time." },
                    { question: "___ they arrive on time?", options: ["Did","Do","Does","Are"], correct: 0, explanation: "Passé → Did." }
                ]
            },
            {
                name: "Adjectifs et adverbes simples",
                exercises: [
                    { question: "She sings ___ .", options: ["beautiful","beautifully","beauty","more beautiful"], correct: 1, explanation: "Adverbe pour décrire le verbe." },
                    { question: "He is a ___ driver.", options: ["careful","carefully","care","more careful"], correct: 0, explanation: "Adjectif devant nom." },
                    { question: "The test was ___ .", options: ["easy","easily","ease","more easy"], correct: 0, explanation: "Adjectif après 'was'." },
                    { question: "Please speak ___ .", options: ["slow","slowly","slower","more slow"], correct: 1, explanation: "Adverbe 'slowly'." },
                    { question: "It's an ___ day.", options: ["amazing","amazingly","amaze","amazed"], correct: 0, explanation: "Adjectif attribut." },
                    { question: "He works very ___ .", options: ["hard","hardly","harder","the hardest"], correct: 0, explanation: "Hard = beaucoup (adverbe)." },
                    { question: "She looked ___ at the picture.", options: ["happy","happily","happiness","happier"], correct: 1, explanation: "Adverbe de manière." },
                    { question: "This coffee is ___ hot.", options: ["extreme","extremely","more extreme","most extreme"], correct: 1, explanation: "Adverbe devant adjectif." },
                    { question: "He is a ___ runner.", options: ["quick","quickly","quickness","quicker"], correct: 0, explanation: "Adjectif + nom." },
                    { question: "She did ___ on the exam.", options: ["good","well","nice","better"], correct: 1, explanation: "Well = adverbe de manière." },
                    { question: "That's a ___ idea.", options: ["great","greatly","greater","most great"], correct: 0, explanation: "Adjectif." },
                    { question: "He drives too ___ .", options: ["fast","fastly","faster","fastest"], correct: 0, explanation: "Fast = adjectif et adverbe." },
                    { question: "The soup tastes ___ .", options: ["delicious","deliciously","deliciousness","more delicious"], correct: 0, explanation: "Adjectif après verbe de sensation." },
                    { question: "She smiled ___ .", options: ["friendly","warmly","warm","warmer"], correct: 1, explanation: "Adverbe." },
                    { question: "He is ___ tired.", options: ["terrible","terribly","terrify","terrific"], correct: 1, explanation: "Adverbe devant adjectif." },
                    { question: "That's a ___ beautiful view.", options: ["real","really","reality","more real"], correct: 1, explanation: "Really + adjectif." },
                    { question: "She spoke ___ .", options: ["quiet","quietly","quietness","quieter"], correct: 1, explanation: "Adverbe." },
                    { question: "He's a ___ worker.", options: ["hard","hardly","harder","hardest"], correct: 0, explanation: "Adjectif." },
                    { question: "The children played ___ .", options: ["noisy","noisily","noise","noisier"], correct: 1, explanation: "Adverbe." },
                    { question: "This is ___ important.", options: ["extreme","extremely","more extreme","most"], correct: 1, explanation: "Extremely + adj." }
                ]
            },
            {
                name: "Formes négatives",
                exercises: [
                    { question: "She ___ like coffee.", options: ["don't","doesn't","isn't","aren't"], correct: 1, explanation: "Doesn't pour 3e personne singulier." },
                    { question: "I ___ a teacher.", options: ["am not","isn't","aren't","don't"], correct: 0, explanation: "I am not." },
                    { question: "They ___ coming tomorrow.", options: ["isn't","aren't","don't","doesn't"], correct: 1, explanation: "They are not → aren't." },
                    { question: "He ___ breakfast in the morning.", options: ["don't have","doesn't have","isn't have","aren't have"], correct: 1, explanation: "Doesn't + have (base)." },
                    { question: "We ___ to school yesterday.", options: ["didn't went","didn't go","don't go","wasn't go"], correct: 1, explanation: "Didn't + verbe base." },
                    { question: "There ___ any milk left.", options: ["isn't","aren't","don't","doesn't"], correct: 0, explanation: "Milk singulier → isn't." },
                    { question: "You ___ listen to me!", options: ["don't","doesn't","isn't","aren't"], correct: 0, explanation: "Don't pour impératif négatif." },
                    { question: "She ___ happy yesterday.", options: ["wasn't","weren't","didn't","isn't"], correct: 0, explanation: "Passé singulier wasn't." },
                    { question: "It ___ rain very often here.", options: ["don't","doesn't","isn't","aren't"], correct: 1, explanation: "It doesn't rain." },
                    { question: "I ___ to the party last night.", options: ["didn't go","didn't went","don't go","wasn't go"], correct: 0, explanation: "Didn't + go." },
                    { question: "He ___ a doctor.", options: ["isn't","aren't","don't","doesn't"], correct: 0, explanation: "He isn't." },
                    { question: "They ___ their homework yet.", options: ["haven't done","hasn't done","didn't did","don't do"], correct: 0, explanation: "Present perfect négatif." },
                    { question: "We ___ see that movie.", options: ["didn't","wasn't","weren't","don't"], correct: 0, explanation: "Didn't see." },
                    { question: "She ___ like spicy food.", options: ["doesn't","don't","isn't","aren't"], correct: 0, explanation: "Doesn't like." },
                    { question: "The children ___ sleeping now.", options: ["aren't","isn't","don't","doesn't"], correct: 0, explanation: "aren't sleeping." },
                    { question: "I ___ understand the question.", options: ["don't","doesn't","am not","isn't"], correct: 0, explanation: "Don't understand." },
                    { question: "He ___ to school yesterday.", options: ["didn't come","didn't came","wasn't come","weren't come"], correct: 0, explanation: "Didn't come." },
                    { question: "This ___ my book.", options: ["isn't","aren't","don't","doesn't"], correct: 0, explanation: "isn't my book." },
                    { question: "They ___ in Paris last week.", options: ["weren't","wasn't","didn't","don't"], correct: 0, explanation: "Weren't pour pluriel." },
                    { question: "She ___ speak French.", options: ["doesn't","don't","isn't","aren't"], correct: 0, explanation: "Doesn't speak." }
                ]
            },
            {
                name: "Expressions de base",
                exercises: [
                    { question: "How ___ you?", options: ["is","am","are","be"], correct: 2, explanation: "How are you? formule de base." },
                    { question: "___ to meet you.", options: ["Nice","Good","Fine","Well"], correct: 0, explanation: "Nice to meet you." },
                    { question: "What's your ___ ? (nom)", options: ["name","age","job","country"], correct: 0, explanation: "What's your name?" },
                    { question: "I'm ___ . (remerciement)", options: ["sorry","fine","thanks","welcome"], correct: 2, explanation: "Thanks = merci." },
                    { question: "You're ___ . (réponse à merci)", options: ["welcome","sorry","fine","great"], correct: 0, explanation: "You're welcome." },
                    { question: "___ is the weather?", options: ["What","How","Where","Who"], correct: 1, explanation: "How's the weather?" },
                    { question: "I'm ___ . (fatigué)", options: ["tired","boring","excited","happy"], correct: 0, explanation: "I'm tired." },
                    { question: "Can I have the ___ , please? (addition)", options: ["bill","menu","plate","food"], correct: 0, explanation: "The bill, please." },
                    { question: "How much ___ it?", options: ["is","are","am","do"], correct: 0, explanation: "How much is it?" },
                    { question: "See you ___ !", options: ["late","later","lately","latest"], correct: 1, explanation: "See you later." },
                    { question: "___ are you from?", options: ["Where","What","Who","Which"], correct: 0, explanation: "Where are you from?" },
                    { question: "I'm sorry, I'm ___ .", options: ["late","lately","latest","more late"], correct: 0, explanation: "I'm late." },
                    { question: "Have a nice ___ !", options: ["day","time","hour","moment"], correct: 0, explanation: "Have a nice day." },
                    { question: "What ___ is it?", options: ["time","hour","clock","watch"], correct: 0, explanation: "What time is it?" },
                    { question: "Good ___ ! (le matin)", options: ["morning","afternoon","evening","night"], correct: 0, explanation: "Good morning." },
                    { question: "___ you help me?", options: ["Can","Do","Are","Is"], correct: 0, explanation: "Can you help me?" },
                    { question: "I don't ___ . (comprendre)", options: ["understand","know","see","get"], correct: 0, explanation: "I don't understand." },
                    { question: "___ your pardon?", options: ["Excuse","Sorry","Pardon","Forgive"], correct: 0, explanation: "Excuse me / Pardon?" },
                    { question: "My ___ is John.", options: ["name","age","job","city"], correct: 0, explanation: "My name is John." },
                    { question: "Where is the ___ ? (toilettes)", options: ["bathroom","restroom","toilet","WC"], correct: 0, explanation: "Where is the bathroom?" }
                ]
            },
            {
                name: "Articles",
                exercises: [
                    { question: "I have ___ apple.", options: ["a","an","the","—"], correct: 1, explanation: "Apple commence par voyelle → an." },
                    { question: "She is ___ teacher.", options: ["a","an","the","—"], correct: 0, explanation: "Teacher consonne → a." },
                    { question: "___ sun is shining.", options: ["A","An","The","—"], correct: 2, explanation: "The pour chose unique." },
                    { question: "He wants ___ new car.", options: ["a","an","the","—"], correct: 0, explanation: "A new car." },
                    { question: "I saw ___ elephant at the zoo.", options: ["a","an","the","—"], correct: 1, explanation: "An elephant." },
                    { question: "This is ___ best day ever!", options: ["a","an","the","—"], correct: 2, explanation: "Superlatif → the." },
                    { question: "She doesn't like ___ cats.", options: ["a","an","the","—"], correct: 3, explanation: "Pluriel général → sans article." },
                    { question: "He is ___ honest man.", options: ["a","an","the","—"], correct: 1, explanation: "Honest (h muet) → an." },
                    { question: "I live in ___ apartment.", options: ["a","an","the","—"], correct: 1, explanation: "An apartment." },
                    { question: "Let's go to ___ park.", options: ["a","an","the","—"], correct: 0, explanation: "Un parc quelconque." },
                    { question: "___ Moon orbits Earth.", options: ["A","An","The","—"], correct: 2, explanation: "The Moon." },
                    { question: "She plays ___ piano beautifully.", options: ["a","an","the","—"], correct: 2, explanation: "Instruments de musique → the." },
                    { question: "I need ___ umbrella.", options: ["a","an","the","—"], correct: 1, explanation: "An umbrella." },
                    { question: "They are ___ students.", options: ["a","an","the","—"], correct: 3, explanation: "Pluriel sans article." },
                    { question: "This is ___ interesting book.", options: ["a","an","the","—"], correct: 1, explanation: "Interesting commence par voyelle." },
                    { question: "He went to ___ hospital.", options: ["a","an","the","—"], correct: 0, explanation: "A hospital." },
                    { question: "___ President will speak.", options: ["A","An","The","—"], correct: 2, explanation: "The President (unique)." },
                    { question: "She has ___ European friend.", options: ["a","an","the","—"], correct: 0, explanation: "European sonne 'you' → a." },
                    { question: "I love ___ coffee.", options: ["a","an","the","—"], correct: 3, explanation: "Généralité → sans article." },
                    { question: "Let's watch ___ movie.", options: ["a","an","the","—"], correct: 0, explanation: "A movie." }
                ]
            },
            {
                name: "Conjonctions",
                exercises: [
                    { question: "I like tea ___ coffee.", options: ["and","but","or","so"], correct: 0, explanation: "And pour ajouter." },
                    { question: "She is tired, ___ she continues.", options: ["and","but","or","so"], correct: 1, explanation: "But = opposition." },
                    { question: "Do you want pizza ___ pasta?", options: ["and","but","or","so"], correct: 2, explanation: "Or pour choix." },
                    { question: "It was raining, ___ we stayed home.", options: ["and","but","or","so"], correct: 3, explanation: "So = donc." },
                    { question: "He is smart ___ kind.", options: ["and","but","or","so"], correct: 0, explanation: "Deux qualités positives." },
                    { question: "I was tired ___ I went to bed early.", options: ["so","but","or","and"], correct: 0, explanation: "So = conséquence." },
                    { question: "She called me ___ I was busy.", options: ["but","so","or","and"], correct: 0, explanation: "Opposition." },
                    { question: "We can go by car ___ by train.", options: ["or","and","but","so"], correct: 0, explanation: "Choix." },
                    { question: "He didn't study, ___ he failed.", options: ["so","but","or","and"], correct: 0, explanation: "Conséquence." },
                    { question: "I like apples ___ oranges.", options: ["and","but","or","so"], correct: 0, explanation: "Ajout." },
                    { question: "She is young ___ very wise.", options: ["but","and","or","so"], correct: 0, explanation: "Contraste." },
                    { question: "Would you like tea ___ coffee?", options: ["or","and","but","so"], correct: 0, explanation: "Choix." },
                    { question: "He was hungry, ___ he ate a sandwich.", options: ["so","but","or","and"], correct: 0, explanation: "Conséquence." },
                    { question: "She can sing ___ dance.", options: ["and","but","or","so"], correct: 0, explanation: "Capacités additionnelles." },
                    { question: "I wanted to go, ___ I was too tired.", options: ["but","so","or","and"], correct: 0, explanation: "Opposition." },
                    { question: "You can stay here ___ leave.", options: ["or","and","but","so"], correct: 0, explanation: "Alternative." },
                    { question: "It's cold, ___ I'll take a jacket.", options: ["so","but","or","and"], correct: 0, explanation: "Conséquence." },
                    { question: "He is poor ___ happy.", options: ["but","and","or","so"], correct: 0, explanation: "Contraste." },
                    { question: "She woke up late ___ missed the bus.", options: ["and","but","or","so"], correct: 0, explanation: "Succession logique." },
                    { question: "Study hard, ___ you will fail.", options: ["or","and","but","so"], correct: 0, explanation: "Sinon → or." }
                ]
            }
        ]
    },
    intermediate: {
        name: "Intermediate",
        themes: [
            {
                name: "Past Simple vs Past Continuous",
                exercises: [
                    { question: "While I ___ TV, the phone rang.", options: ["watched","was watching","watch","were watching"], correct: 1, explanation: "Action longue au past continuous interrompue par une courte au past simple." },
                    { question: "She ___ to Paris last summer.", options: ["go","went","was going","had gone"], correct: 1, explanation: "Action terminée dans le passé → past simple." },
                    { question: "When I arrived, they ___ dinner.", options: ["had","were having","have","are having"], correct: 1, explanation: "Action en cours au moment précis → past continuous." },
                    { question: "He ___ a letter when I saw him.", options: ["wrote","was writing","write","is writing"], correct: 1, explanation: "Action en cours dans le passé." },
                    { question: "They ___ the game because it rained.", options: ["cancel","cancelled","were cancelling","had cancelled"], correct: 1, explanation: "Action terminée → past simple." },
                    { question: "I ___ breakfast when the doorbell rang.", options: ["had","was having","have","were having"], correct: 1, explanation: "Past continuous pour action en cours." },
                    { question: "We ___ to the beach every day last week.", options: ["go","went","were going","have gone"], correct: 1, explanation: "Habitude passée → past simple." },
                    { question: "While she ___ , the baby woke up.", options: ["slept","was sleeping","sleep","is sleeping"], correct: 1, explanation: "Action longue (sleeping) interrompue." },
                    { question: "He ___ his leg while he was playing football.", options: ["breaks","broke","was breaking","has broken"], correct: 1, explanation: "Action courte au past simple." },
                    { question: "At 8 pm yesterday, I ___ a book.", options: ["read","was reading","have read","had read"], correct: 1, explanation: "Heure précise dans le passé → past continuous." },
                    { question: "They ___ home when it started to snow.", options: ["walked","were walking","walk","have walked"], correct: 1, explanation: "Action en cours." },
                    { question: "She ___ the exam because she had studied.", options: ["pass","passed","was passing","has passed"], correct: 1, explanation: "Fait passé terminé." },
                    { question: "I ___ a shower when you called.", options: ["took","was taking","take","have taken"], correct: 1, explanation: "Past continuous." },
                    { question: "He ___ the bus every day last year.", options: ["takes","took","was taking","has taken"], correct: 1, explanation: "Routine passée." },
                    { question: "While we ___ dinner, the lights went out.", options: ["had","were having","have","are having"], correct: 1, explanation: "Past continuous." },
                    { question: "She ___ to music when her phone rang.", options: ["listened","was listening","listens","has listened"], correct: 1, explanation: "Action en cours interrompue." },
                    { question: "They ___ the new house last month.", options: ["buy","bought","were buying","have bought"], correct: 1, explanation: "Past simple." },
                    { question: "I ___ a strange noise while I was sleeping.", options: ["hear","heard","was hearing","have heard"], correct: 1, explanation: "Action courte." },
                    { question: "She ___ her arm when she fell.", options: ["hurts","hurt","was hurting","has hurt"], correct: 1, explanation: "Past simple (hurt reste hurt)." },
                    { question: "When the teacher came in, the students ___ loudly.", options: ["talked","were talking","talk","have talked"], correct: 1, explanation: "Action en cours au moment de l'arrivée." }
                ]
            },
            {
                name: "Present Perfect (ever, never, just, already, yet)",
                exercises: [
                    { question: "I have ___ been to Japan.", options: ["never","ever","yet","already"], correct: 0, explanation: "Never = jamais (sens négatif)." },
                    { question: "Have you ___ seen a ghost?", options: ["never","ever","yet","just"], correct: 1, explanation: "Ever = un jour (dans une question)." },
                    { question: "She has ___ finished her homework. (just now)", options: ["already","yet","ever","never"], correct: 0, explanation: "Already = déjà (action accomplie plus tôt que prévu)." },
                    { question: "They haven't arrived ___ .", options: ["already","yet","ever","never"], correct: 1, explanation: "Yet = pas encore (négation)." },
                    { question: "He has ___ left. (a moment ago)", options: ["just","yet","ever","never"], correct: 0, explanation: "Just = vient de." },
                    { question: "I have ___ seen that movie twice.", options: ["already","yet","ever","never"], correct: 0, explanation: "Already = déjà." },
                    { question: "We have ___ met him before.", options: ["never","ever","yet","just"], correct: 0, explanation: "Never + participe passé." },
                    { question: "Has she ___ called you?", options: ["ever","never","yet","just"], correct: 0, explanation: "Ever pour une question." },
                    { question: "I have ___ finished my report. (a few seconds ago)", options: ["just","already","yet","ever"], correct: 0, explanation: "Just = très récent." },
                    { question: "They have ___ eaten dinner, so they aren't hungry.", options: ["already","yet","ever","never"], correct: 0, explanation: "Already indique une action terminée avant le moment présent." },
                    { question: "She hasn't finished ___ .", options: ["already","yet","just","ever"], correct: 1, explanation: "Yet en fin de phrase négative." },
                    { question: "This is the best cake I have ___ tasted.", options: ["ever","never","yet","already"], correct: 0, explanation: "Ever = de toute ma vie (superlatif)." },
                    { question: "I have ___ been so happy!", options: ["never","ever","yet","just"], correct: 0, explanation: "Never = jamais." },
                    { question: "Have you ___ tried sushi?", options: ["ever","never","yet","already"], correct: 0, explanation: "Question avec ever." },
                    { question: "He has ___ arrived. Let's go!", options: ["just","yet","ever","never"], correct: 0, explanation: "Just = vient d'arriver." },
                    { question: "We haven't decided ___ .", options: ["already","yet","just","ever"], correct: 1, explanation: "Yet dans une phrase négative." },
                    { question: "She has ___ visited three countries this year.", options: ["already","yet","ever","never"], correct: 0, explanation: "Already = déjà (accompli)." },
                    { question: "I have ___ seen such a beautiful sunset.", options: ["never","ever","yet","just"], correct: 0, explanation: "Never + participe passé." },
                    { question: "Have you finished your essay ___ ?", options: ["already","yet","just","ever"], correct: 1, explanation: "Yet dans une question (attente)." },
                    { question: "They have ___ moved into their new house.", options: ["just","yet","ever","never"], correct: 0, explanation: "Just = récemment." }
                ]
            },
            {
                name: "Modal verbs (can, could, must, should, might)",
                exercises: [
                    { question: "You ___ smoke here. It's forbidden.", options: ["mustn't","don't have to","couldn't","might not"], correct: 0, explanation: "Mustn't = interdiction." },
                    { question: "She ___ speak three languages.", options: ["can","must","should","might"], correct: 0, explanation: "Can = capacité." },
                    { question: "You ___ study harder if you want to pass.", options: ["should","can","mustn't","might"], correct: 0, explanation: "Should = conseil." },
                    { question: "It ___ rain later, take an umbrella.", options: ["might","must","should","can"], correct: 0, explanation: "Might = probabilité faible." },
                    { question: "He ___ be at home; the lights are on.", options: ["must","can","might","should"], correct: 0, explanation: "Must = certitude logique." },
                    { question: "When I was young, I ___ run very fast.", options: ["could","can","should","might"], correct: 0, explanation: "Could = capacité passée." },
                    { question: "You ___ pay for the ticket; it's free.", options: ["don't have to","mustn't","couldn't","shouldn't"], correct: 0, explanation: "Don't have to = absence d'obligation." },
                    { question: "___ I use your phone, please?", options: ["Can","Must","Should","Might"], correct: 0, explanation: "Can = permission informelle." },
                    { question: "You look sick. You ___ see a doctor.", options: ["should","can","mustn't","might"], correct: 0, explanation: "Should = conseil." },
                    { question: "They ___ be late because of the traffic.", options: ["might","must","can","should"], correct: 0, explanation: "Might = possibilité." },
                    { question: "She ___ be at work now; it's 10 am.", options: ["must","can","might","should"], correct: 0, explanation: "Déduction logique." },
                    { question: "You ___ touch that; it's hot!", options: ["mustn't","don't have to","couldn't","might not"], correct: 0, explanation: "Mustn't = défense." },
                    { question: "He ___ be the murderer; he has an alibi.", options: ["can't","mustn't","shouldn't","might not"], correct: 0, explanation: "Can't = impossibilité logique." },
                    { question: "___ you help me with this box?", options: ["Could","Must","Should","Might"], correct: 0, explanation: "Could = demande polie." },
                    { question: "We ___ hurry or we'll miss the bus.", options: ["must","can","might","should"], correct: 0, explanation: "Must = obligation forte." },
                    { question: "You ___ eat so much sugar; it's unhealthy.", options: ["shouldn't","mustn't","don't have to","can't"], correct: 0, explanation: "Shouldn't = conseil négatif." },
                    { question: "They ___ win the match; they are playing well.", options: ["might","must","can","should"], correct: 0, explanation: "Might = probabilité." },
                    { question: "I ___ find my keys; I've looked everywhere.", options: ["can't","mustn't","shouldn't","might not"], correct: 0, explanation: "Can't find = incapacité." },
                    { question: "You ___ be tired after that long journey.", options: ["must","can","might","should"], correct: 0, explanation: "Must = forte probabilité." },
                    { question: "She ___ play the piano very well.", options: ["can","must","should","might"], correct: 0, explanation: "Can = capacité." }
                ]
            }
            // Pour gagner de la place, je n'ajoute que 3 thèmes pour l'Intermediate.
            // Vous pouvez facilement ajouter les 7 autres (Conditionals, Passive, Reported speech, etc.) en suivant le même modèle.
        ]
    },
    advanced: {
        name: "Advanced",
        themes: [
            {
                name: "Inversion & Emphasis",
                exercises: [
                    { question: "Never ___ I seen such a beautiful sight.", options: ["have","did","was","had"], correct: 0, explanation: "Inversion après 'never' en début de phrase → auxiliaire avant sujet." },
                    { question: "Only after the movie ___ he realize his mistake.", options: ["did","was","had","could"], correct: 0, explanation: "Only after + auxiliaire did + sujet." },
                    { question: "Not only ___ she late, but she also forgot her keys.", options: ["was","did","had","were"], correct: 0, explanation: "Not only + auxiliaire + sujet." },
                    { question: "Seldom ___ they arrive on time.", options: ["do","are","have","were"], correct: 0, explanation: "Seldom + do/does + sujet." },
                    { question: "Under no circumstances ___ you leave the room.", options: ["should","must","can","will"], correct: 0, explanation: "Under no circumstances + modal + sujet." },
                    { question: "Rarely ___ such talent.", options: ["have I seen","I have seen","did I see","I saw"], correct: 0, explanation: "Rarely + inversion (have I seen)." },
                    { question: "No sooner ___ the train than it started to rain.", options: ["had we left","we left","did we leave","we had left"], correct: 0, explanation: "No sooner + had + sujet." },
                    { question: "Little ___ they know about the surprise.", options: ["did","do","have","were"], correct: 1, explanation: "Little + do/does + sujet (présent)." },
                    { question: "Only then ___ I understand the truth.", options: ["did","was","had","could"], correct: 0, explanation: "Only then + did + sujet." },
                    { question: "Not until the end ___ he reveal his secret.", options: ["did","was","had","would"], correct: 0, explanation: "Not until + auxiliaire did." },
                    { question: "Hardly ___ the house when the phone rang.", options: ["had I left","I left","did I leave","I had left"], correct: 0, explanation: "Hardly + had + sujet." },
                    { question: "In no way ___ this behavior be tolerated.", options: ["should","must","can","will"], correct: 0, explanation: "In no way + modal + sujet." },
                    { question: "Only by working hard ___ you succeed.", options: ["will","do","can","should"], correct: 0, explanation: "Only by + will + sujet." },
                    { question: "Never before ___ such a disaster.", options: ["have we witnessed","we witnessed","did we witness","we have witnessed"], correct: 0, explanation: "Never before + have + sujet." },
                    { question: "So beautiful ___ the view that we stopped.", options: ["was","did","had","were"], correct: 0, explanation: "So + adjectif + was + sujet." },
                    { question: "Such ___ his anger that he shouted.", options: ["was","did","had","were"], correct: 0, explanation: "Such + be + sujet." },
                    { question: "Not a single word ___ she say.", options: ["did","was","had","could"], correct: 0, explanation: "Not a single word + did + sujet." },
                    { question: "Nowhere ___ I find peace.", options: ["could","did","was","had"], correct: 0, explanation: "Nowhere + could + sujet." },
                    { question: "Only once ___ he apologize.", options: ["did","was","had","would"], correct: 0, explanation: "Only once + did + sujet." },
                    { question: "On no account ___ you open this door.", options: ["must","should","can","will"], correct: 0, explanation: "On no account + must + sujet." }
                ]
            }
            // Ajoutez d'autres thèmes avancés ici (Subjunctive, Mixed Conditionals, etc.)
        ]
    }
};

// Pour faciliter l'accès depuis app.js, on expose l'objet globalement
if (typeof module === 'undefined') {
    window.grammarData = grammarData;
}