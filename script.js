        const toplist = document.getElementById("toplist")
        const lisdiscript = document.getElementById("listdiscript")
        const nofi = document.querySelector(".Nofication")
        const header = document.getElementById("header")
          const HomeNav = document.querySelector(".home-nav")
          const Recentpage = document.getElementById("RecentPage")
         // function for Home-Navigation 
          const HomeBtn = document.getElementById("Homebtn")
          const HomePage = document.getElementById("Home-Page")
          const footer = document.getElementById("footer")
          HomeBtn.addEventListener("click", e => {
              HomePage.style.display = "block";
               searchPage.style.display = "none";
                 LibraryPage.style.display = "none";
                 RatePage.style.display = "none";
                 header.style.display = "flex";
                 nofi.style.display = "block";
                 dictionaryList.style.display = "none";
                 SettingPage.style.display = "none";  
                footer.style.display = "block";
                toplist.style.animation = "fadeInTop 0.5s ease";    
                listdiscript.style.animation = "fadeInLeft 0.5s ease";   
                Recentpage.style.display = "none";                                                                     
          })        
        //function for Search-Navigation 
        const searchBtn = document.getElementById("Searchbtn")
        const searchPage = document.getElementById("Search-Page")
        searchBtn.addEventListener("click", e => {
             HomePage.style.display = "none";
               searchPage.style.display = "block";
                 LibraryPage.style.display = "none";
                 RatePage.style.display = "none";
                 header.style.display = "none";
                 nofi.style.display = "none";
                 dictionaryList.style.display = "none";  
                 SettingPage.style.display = "none";
                footer.style.display = "none"; 
                Recentpage.style.display = "none";                                                                                                                                                                                     
        })
        searchBtn.addEventListener("click", e => {
            searchPage.style.animation = "fadeInTop 0.5s ease";
        })
        const adjectivepage = document.getElementById("adjectivepage")
        const summarypage = document.getElementById("summarypage")
        const vocabularypage = document.getElementById("vocabularypage")
        const verbpage = document.getElementById("verbpage")
        const pronounpage = document.getElementById("pronounpage")
        const nounpage = document.getElementById("nounpage")       
        const noun = document.getElementById("Noun")
        const pronoun = document.getElementById("pronoun");
        const verb = document.getElementById("Verb")
        const vocabulary = document.getElementById("Vocabulary")
        const summary = document.getElementById("Summarize")
        const adjective = document.getElementById("Adjective")
        const suggestionlistpage = document.getElementById("suggestionlist");
        pronoun.addEventListener("click" , e => {
            suggestionlistpage.style.display = "block";
            searchPage.style.display = "none";
            nounpage.style.display = "none";
           pronounpage.style.display = "block";      
           verbpage.style.display = "none"; 
           vocabularypage.style.display = "none"; 
           summarypage.style.display = "none";  
           adjectivepage.style.display = "none";             
        })
       noun.addEventListener("click", () => {
            suggestionlistpage.style.display = "block";    
           searchPage.style.display = "none";                   
           nounpage.style.display = "block";
           pronounpage.style.display = "none";
           verbpage.style.display = "none";
           vocabularypage.style.display = "none";
           summarypage.style.display = "none";
           adjectivepage.style.display = "none";
           HomeNav.style.display = "none";
       })
       verb.addEventListener("click", () => {
           suggestionlistpage.style.display = "block";    
           searchPage.style.display = "none";                   
           nounpage.style.display = "none";
           pronounpage.style.display = "none";
           verbpage.style.display = "block";
           vocabularypage.style.display = "none";
           summarypage.style.display = "none";
           adjectivepage.style.display = "none";
           HomeNav.style.display = "none";
       })
       vocabulary.addEventListener("click", () => {  
           suggestionlistpage.style.display = "block";    
           searchPage.style.display = "none";                   
           nounpage.style.display = "none";
           pronounpage.style.display = "none";
           verbpage.style.display = "none";
           vocabularypage.style.display = "block";
           summarypage.style.display = "none";
           adjectivepage.style.display = "none";
           HomeNav.style.display = "none";
       });
       summary.addEventListener("click", () => {
           suggestionlistpage.style.display = "block";    
           searchPage.style.display = "none";                   
           nounpage.style.display = "none";
           pronounpage.style.display = "none";
           verbpage.style.display = "none";
           vocabularypage.style.display = "none";
           summarypage.style.display = "block";
           adjectivepage.style.display = "none";
           HomeNav.style.display = "none";
           });
         adjective.addEventListener("click", () => {
           suggestionlistpage.style.display = "block";    
           searchPage.style.display = "none";                   
           nounpage.style.display = "none";
           pronounpage.style.display = "none";
           verbpage.style.display = "none";
           vocabularypage.style.display = "none";
           summarypage.style.display = "none";
           adjectivepage.style.display = "block";
           HomeNav.style.display = "none";
             });
        //function for library Page
        const Librarybtn = document.getElementById("Librarybtn")
        const LibraryPage = document.getElementById("Library-Page")
        
       Librarybtn.addEventListener("click", e => {
            HomePage.style.display = "none";
               searchPage.style.display = "none";
                 LibraryPage.style.display = "block";
                 RatePage.style.display = "none";
                 header.style.display = "none";
                 nofi.style.display = "none";  
                 dictionaryList.style.display = "none"; 
                 SettingPage.style.display = "none";             
                footer.style.display = "none";    
                Recentpage.style.display = "none";                                                                                                                                                                                                   
       })
       Librarybtn.addEventListener("click", e => {
           LibraryPage.style.animation = "fadeInLeft 0.5s ease";
       })
       //function for Rate Page
       const Ratebtn = document.getElementById("Ratebtn")
       const RatePage = document.getElementById("Rate-Page")
       
       Ratebtn.addEventListener("click", e => {
            HomePage.style.display = "none";
               searchPage.style.display = "none";
                 LibraryPage.style.display = "none";
                 RatePage.style.display = "block";
                  header.style.display = "none";   
                 dictionaryList.style.display = "none";     
                   nofi.style.display = "none";
                 SettingPage.style.display = "none";   
                footer.style.display = "none";
               Recentpage.style.display = "none";                                                                                                                                       
       })
         Ratebtn.addEventListener("click" , e => {
             RatePage.style.animation = "fadeIn 0.5s ease";
         })
         const rateusbtn = document.getElementById("rateusbtn")
         rateusbtn.addEventListener("click", e => {
            HomePage.style.display = "none";
               searchPage.style.display = "none";
                 LibraryPage.style.display = "none";
                 RatePage.style.display = "block";
                  header.style.display = "none";   
                 dictionaryList.style.display = "none";     
                   nofi.style.display = "none";
                 SettingPage.style.display = "none";   
                footer.style.display = "none";
                HomeNav.style.display = "flex";
                dictbtn.style.display = "block";
             RatePage.style.animation = "fadeIn 0.5s ease";                
                });     
         // function for Settings
           const SettingBtn = document.getElementById("Settings")
           const SettingPage = document.getElementById("Settings-Page")
             SettingBtn.addEventListener("click", e => {
                 header.style.display = "none";
                 nofi.style.display = "none";
                 SettingPage.style.display = "block";
                 HomePage.style.display = "none";
                 HomeNav.style.display = "none";
                 searchPage.style.display = "none";
                 LibraryPage.style.display = "none";
                 RatePage.style.display = "none";
                 dictionaryList.style.display = "none";      
                footer.style.display = "none";   
                gamepage.style.display = "none";                                                                                    
             })
            SettingBtn.addEventListener("click", e => {
                SettingPage.style.animation = "fadeInRight 0.5s ease";
            })
            const custompage = document.getElementById("customPage");
            const custompagebtn = document.getElementById("customPagebtn");
            const custombtn = document.getElementById("custombtn");
            
            custombtn.addEventListener("click" , e => {
                custompage.style.display = "block";
                SettingPage.style.display = "none";
                custompage.style.animation = "fadeInRight 0.5s ease";
            })
            custompagebtn.addEventListener("click",e => {
                custompage.style.display = "none";
                SettingPage.style.display = "block";
            })
            //for backbtn 
             const backbtn = document.getElementById("backbtn").addEventListener("click" , e => {
                  HomePage.style.display = "block";
               searchPage.style.display = "none";
                 LibraryPage.style.display = "none";
                 RatePage.style.display = "none";
                 header.style.display = "flex";
                 nofi.style.display = "block";
                 dictionaryList.style.display = "none";
                 SettingPage.style.display = "none";   
                 HomeNav.style.display = "flex"; 
                 footer.style.display = "block"; 
             })
          //function for dictionary page 
                 const dictionaryList = document.getElementById("dictionaryList")            
                 const dictionarybtn = document.getElementById("dictionarybtn")
            dictionarybtn.addEventListener("click", e => {
                dictionaryList.style.display = "block";
                Recentpage.style.display = "none"; 
            })
            dictionarybtn.addEventListener("click" , e => {
                dictionaryList.style.animation = "fadeInTop 0.5s ease";
            })
            const dictbtn = document.getElementById("dictbtn")
            
            dictbtn.addEventListener("click" , e => {
                dictionaryList.style.animation = "fadeInTop 0.5s ease";                                    
                HomePage.style.display = "none";
               searchPage.style.display = "none";
                 LibraryPage.style.display = "block";
                 RatePage.style.display = "none";
                 header.style.display = "none";
                 nofi.style.display = "none";  
                 dictionaryList.style.display = "none"; 
                 SettingPage.style.display = "none";             
                footer.style.display = "none";   
            })
            
            //for homenav 
            pronoun.addEventListener("click", () => {
                HomeNav.style.display = "none";
              suggestionlistpage.style.animation = "fadeInTop 0.5s ease";
              });
           function quitsuggestionlist(){
         searchPage.style.display = "block";
            suggestionlistpage.style.display = "none";
                 HomeNav.style.display = "flex"; 
}
         //functionc for speech
          let btn = document.getElementById("btn"),
     search = document.getElementById("search");
     
     btn.addEventListener("click", e => {
         console.log(search.value)
         responsiveVoice.speak(search.value, 'UK English Male')
     })
       
        const gamebtn = document.getElementById("gamebtn")
        const gamepage = document.getElementById("gamePage")
        const gamequit = document.getElementById("gamebtnquit")
        const gameeasy = document.getElementById("Easy");
        const gamenormal = document.getElementById("Normal")
        gamebtn.addEventListener("click", e => {
            gamepage.style.display = "block";
            HomePage.style.display = "none";
            HomeNav.style.display = "none";
            footer.style.display = "none";
            dictbtn.style.display = "none";
            gamepage.style.animation = "fadeInRight 0.5s ease";
        })
        gamequit.addEventListener("click", e => {
            HomeNav.style.display = "flex";
            HomePage.style.display = "block";
            gamepage.style.display = "none";
            footer.style.display = "block";
            dictbtn.style.display = "block";
        })
        gameeasy.addEventListener("click" , e => {
            window.location.assign("Easy.html")
        })
        gamenormal.addEventListener("click" , e => {
            window.location.assign("Normal.html")
        })
        //for Recent page 
       document.getElementById("recentbtn").addEventListener("click", () => {
           Recentpage.style.display = "block";
                dictionaryList.style.display = "none";           
       })
        //function for booklist
        let Navbutton = document.getElementById("ListButton")
        let Navdescript = document.getElementById("Navdescription")
        let list1 = document.getElementById("list1")
         list1.addEventListener("click", () => {
       window.location.assign("Profilelist/profile-booklist1.html");
   })
       document.getElementById("list2").addEventListener("click", () => {
        window.location.assign("Profilelist/profile-booklist2.html");
       })
       document.getElementById("list3").addEventListener("click", () => {
        window.location.assign("Profilelist/profile-booklist3.html");
       })
       document.getElementById("list4").addEventListener("click", () => {
        window.location.assign("Profilelist/profile-booklist4.html");
       })
       document.getElementById("list11").addEventListener("click", () => {
          Navdescript.innerHTML = "a list or collection of words or of words and phrases usually alphabetically arranged and explained or defined";
          Navbutton.innerHTML = `
             <button onclick="nav1()">Learn More</button>
          `;
       })
       document.getElementById("list22").addEventListener("click", () => {
          Navdescript.innerHTML = "the change of form that words undergo to mark such distinctions as those of case, gender, number, tense, person, mood, or voice";    
            Navbutton.innerHTML = `
             <button onclick="nav2()">Learn More</button>
          `; 
       })
       document.getElementById("list33").addEventListener("click", () => {
          Navdescript.innerHTML = "Pronouns are words (or phrases) you substitute for nouns when your reader or listener already knows which noun you’re referring to. ";
            Navbutton.innerHTML = `
             <button onclick="nav3()">Learn More</button>
          `;
       })
       document.getElementById("list44").addEventListener("click", () => {
          Navdescript.innerHTML = "Pronouns do a whole lot more than helping us avoid repetitiveness. They provide context, make your sentences’ meanings clearer";
            Navbutton.innerHTML = `
             <button onclick="nav4()">Learn More</button>
          `;
       })
       document.getElementById("list55").addEventListener("click", () => {
          Navdescript.innerHTML = "Paragraph summarization is the process of writing a short overview of a paragraph that highlights its key points.";
            Navbutton.innerHTML = `
             <button onclick="nav5()">Learn More</button>
          `;
       })
       document.getElementById("list66").addEventListener("click", () => {
          Navdescript.innerHTML = "Reading skills are abilities that pertain to a person's capacity to read, comprehend, interpret and decode written language and texts";
            Navbutton.innerHTML = `
             <button onclick="nav6()">Learn More</button>
          `;
       })
       document.getElementById("list77").addEventListener("click", () => {
          Navdescript.innerHTML = "Decoding is the ability to apply knowledge of letter-sound relationships, including knowledge of letter patterns, to correctly pronounce written words.";
            Navbutton.innerHTML = `
             <button onclick="nav7()">Learn More</button>
          `;
       })
       document.getElementById("list88").addEventListener("click", () => {
          Navdescript.innerHTML = "Adjectives are words that describe the qualities or states of being of nouns: enormous, doglike, silly, yellow, fun, fast.";
            Navbutton.innerHTML = `
             <button onclick="nav8()">Learn More</button>
          `;
       })
       document.getElementById("list99").addEventListener("click", () => {
          Navdescript.innerHTML = "An adverb is a word that modifies (describes) a verb (“he sings loudly”), an adjective (“very tall”), another adverb (“ended too quickly”), or even a whole sentence (“Fortunately, I had brought an umbrella.”).";
            Navbutton.innerHTML = `
             <button onclick="nav9()">Learn More</button>
          `;
       })
       document.getElementById("list100").addEventListener("click", () => {
          Navdescript.innerHTML = "Nouns are everywhere in our writing. But what are all the types of nouns you come across, and how do you use them?";
            Navbutton.innerHTML = `
             <button onclick="nav10()">Learn More</button>
          `;
       })
       document.getElementById("list111").addEventListener("click", () => {
          Navdescript.innerHTML = "Prepositions indicate relationships between other words in a sentence.";
            Navbutton.innerHTML = `
             <button onclick="nav11()">Learn More</button>
          `;
       })
       // function for nav-booklist
 function nav1(){
     window.location.assign("Profilelist/profile-booklist11.html");
}      
 function nav2(){
         window.location.assign("Profilelist/profile-booklist22.html");
}
 function nav3(){
         window.location.assign("Profilelist/profile-booklist33.html");
}      
 function nav4(){
         window.location.assign("Profilelist/profile-booklist44.html");
}      
 function nav5(){
         window.location.assign("Profilelist/profile-booklist55.html");
}      
 function nav6(){
         window.location.assign("Profilelist/profile-booklist66.html");
}   
 function nav7(){
         window.location.assign("Profilelist/profile-booklist77.html");
} 
 function nav8(){
         window.location.assign("Profilelist/profile-booklist88.html");
}           
 function nav9(){
         window.location.assign("Profilelist/profile-booklist99.html");
}         
 function nav10(){
        window.location.assign("Profilelist/profile-booklist100.html"); 
}      
 function nav11(){
         window.location.assign("Profilelist/profile-booklist111.html");
}      
   //for Searchpage
function SuggestlistQuit(){
       searchPage.style.display = "block";
       suggestionlistpage.style.display = "none";
}
   
   //for searchsuggestlist 
   document.getElementById("Verb").addEventListener("click", () => {
       
   })
      document.getElementById("Vocabulary").addEventListener("click", () => {      
      
        })
          document.getElementById("Summarize").addEventListener("click", () => {
                                
        })
           document.getElementById("Adjective").addEventListener("click", () => {
               
        })
        // for dictionaryfunction
          document.querySelectorAll('#dict-nav li').forEach(li => {
            li.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target') + '-section';
                document.querySelectorAll('.section').forEach(section => {
                    if (section.id === targetId) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            });
        });
        
        const bookpage1 = document.getElementById("bookpage001")
        const bookpage2 = document.getElementById("bookpage002")
        const bookpage3 = document.getElementById("bookpage003")
        const bookpage01 = document.getElementById("bookpage01")
        const bookpage02 = document.getElementById("bookpage02")
        const bookpage03 = document.getElementById("bookpage03")                
       //Nav booklist skills
     document.getElementById("Readingskillsbtn").addEventListener("click", () => {
         bookpage1.style.display = "flex";
         bookpage2.style.display = "none";
         bookpage3.style.display = "none";
         bookpage01.style.display = "flex";
         bookpage02.style.display = "none";
         bookpage03.style.display = "none";
     })
     document.getElementById("enchanceskillsbtn").addEventListener("click", () => {
        bookpage1.style.display = "none";
         bookpage2.style.display = "flex";
         bookpage3.style.display = "none";
          bookpage01.style.display = "none";
         bookpage02.style.display = "flex";
         bookpage03.style.display = "none";
     })
     document.getElementById("vocalskillsbtn").addEventListener("click", () => {
          bookpage1.style.display = "none";
         bookpage2.style.display = "none";
         bookpage3.style.display = "flex";
          bookpage01.style.display = "none";
         bookpage02.style.display = "none";
         bookpage03.style.display = "flex";
     })
       
        // about
       const about = document.getElementById("about")
        const aboutbtn = document.getElementById("aboutbtn")
         const aboutquit = document.getElementById("aboutquit")
         aboutbtn.addEventListener("click", () => {
             about.style.display = "block";
             about.style.animation = "fadeInLeft 0.5s ";
             SettingPage.style.display = "none";
         })
         aboutquit.addEventListener("click", () => {
             SettingPage.style.display = "block";
             about.style.display = "none";
         })
         
         // for searchfunction
          const data = [
    { name: 'Pronoun', url: 'Profilelist/profile-booklist2.html' },
    { name: 'Vocabulary', url: 'Profilelist/profile-booklist11.html' },
    { name: 'Verbs', url: 'Profilelist/profile-booklist3.html' },
    { name: 'Adjective', url: 'Profilelist/profile-booklist88.html' },
    { name: 'Reading development', url: 'Profilelist/profile-book23.html' },
    { name: 'Decoding', url: 'Profilelist/profile-booklist77.html' },
    { name: 'Antonym', url: 'Profilelist/profile-book31.html' },
    { name: 'Synonym', url: 'Profilelist/profile-book30.html' },
    { name: 'Sentence structure', url: 'Profilelist/profile-book22.html' },
    { name: 'Fluency', url: 'Profilelist/profile-book21.html' },
    { name: 'Visual', url: 'Profilelist/profile-book18.html' },
    { name: 'Grammar', url: 'Profilelist/profile-book32.html' },
    { name: 'Compare and contrast', url: 'Profilelist/profile-book28.html' },
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function handleSuggestionClick(url) {
    // Redirect to the URL when a suggestion is clicked
    window.location.href = url;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const query = searchInput.value.toLowerCase();
        const matchedItem = data.find(item => item.name.toLowerCase() === query);
        if (matchedItem) {
            window.location.href = matchedItem.url;
        }
    }
}

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    searchResults.classList.remove('show');
    
    if (query) {
        const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
        
        filteredData.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = item.name;
            resultItem.addEventListener('click', function() {
                handleSuggestionClick(item.url);
            });
            searchResults.appendChild(resultItem);
        });

        searchResults.classList.add('show');
    }
});

// Add event listener for 'Enter' key press
    searchInput.addEventListener('keydown', handleKeyPress);
         // for note pad
          let currentPage = 1;
        const totalPages = 10; // Change this to dynamic later
        const pageNumber = document.getElementById("pageNumber");
        const note = document.getElementById("note");
        const imgDiv = document.getElementById("imgDiv");

        document.getElementById("prevPage").addEventListener("click", () => changePage(-1));
        document.getElementById("nextPage").addEventListener("click", () => changePage(1));
        document.getElementById("newPage").addEventListener("click", createNewPage);
        document.getElementById("deletePage").addEventListener("click", deletePage);
        document.getElementById("saveNote").addEventListener("click", saveNote);
        document.getElementById("clearAll").addEventListener("click", clearAll);
        document.getElementById("imgInput").addEventListener("change", loadImage);
        document.getElementById("undo").addEventListener("click", undoNote);
        document.getElementById("redo").addEventListener("click", redoNote);
        document.getElementById("printNote").addEventListener("click", printNote);
        document.getElementById("exportNote").addEventListener("click", exportNote);
        document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
        let undoStack = [];
        let redoStack = [];

        function changePage(direction) {
            saveNote();
            currentPage += direction;
            if (currentPage < 1) currentPage = 1;
            if (currentPage > totalPages) currentPage = totalPages;
            loadPage();
        }

        function loadPage() {
            pageNumber.textContent = `Page ${currentPage}`;
            const savedNote = localStorage.getItem(`note${currentPage}`);
            note.value = savedNote ? savedNote : '';

            const savedImage = localStorage.getItem(`img${currentPage}`);
            imgDiv.innerHTML = savedImage ? `<img src="${savedImage}" alt="Image" />` : '';
        }

        function saveNote() {
            localStorage.setItem(`note${currentPage}`, note.value);
            const img = imgDiv.querySelector("img");
            localStorage.setItem(`img${currentPage}`, img ? img.src : '');
            addToUndoStack();
        }

        function clearAll() {
            note.value = '';
            imgDiv.innerHTML = '';
            saveNote();
        }

        function loadImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imgDiv.innerHTML = `<img src="${e.target.result}" alt="Image" />`;
                    saveNote();
                };
                reader.readAsDataURL(file);
            }
        }

        function createNewPage() {
            saveNote();
            currentPage = Math.min(currentPage + 1, totalPages);
            loadPage();
        }

        function deletePage() {
            if (confirm("Are you sure you want to delete this page?")) {
                localStorage.removeItem(`note${currentPage}`);
                localStorage.removeItem(`img${currentPage}`);
                note.value = '';
                imgDiv.innerHTML = '';
                saveNote();
            }
        }

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            const notepad = document.querySelector('.notepad');
            notepad.classList.toggle('dark-mode');
           if (document.getElementById("darkModeToggle").innerHTML  == "Dark Mode" ){
        document.getElementById("darkModeToggle").textContent = "Light Mode";
}else{
        document.getElementById("darkModeToggle").textContent = "Dark Mode";
}
        }

        function addToUndoStack() {
            undoStack.push({ page: currentPage, note: note.value, img: imgDiv.innerHTML });
            redoStack = []; // Clear redo stack on new action
        }

        function undoNote() {
            if (undoStack.length) {
                const lastState = undoStack.pop();
                redoStack.push({ page: currentPage, note: note.value, img: imgDiv.innerHTML });
                note.value = lastState.note;
                imgDiv.innerHTML = lastState.img;
                saveNote();
            }
        }

        function redoNote() {
            if (redoStack.length) {
                const nextState = redoStack.pop();
                undoStack.push({ page: currentPage, note: note.value, img: imgDiv.innerHTML });
                note.value = nextState.note;
                imgDiv.innerHTML = nextState.img;
                saveNote();
            }
        }

        function printNote() {
            const printWindow = window.open('', '', 'height=600,width=800');
            printWindow.document.write('<html><head><title>Print Note</title>');
            printWindow.document.write('</head><body >');
            printWindow.document.write('<pre>' + note.value + '</pre>');
            const img = imgDiv.querySelector('img');
            if (img) {
                printWindow.document.write('<img src="' + img.src + '" alt="Image" />');
            }
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
        }

        function exportNote() {
            const blob = new Blob([note.value], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `note${currentPage}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        }
        function Quitnotepad(){
           document.getElementById("notepad").style.display = "none";
           document.querySelector(".home-nav").style.display = "flex";
           document.getElementById("Library-Page").style.display = "block";
           document.getElementById("dictionaryList").style.display = "none";
           document.getElementById("RecentPage").style.display = "none";
       }
        // Initialize the notepad with the first page
        loadPage();
           
       document.getElementById("notebtn").addEventListener("click", () => {
           document.getElementById("notepad").style.display = "block";
           HomeNav.style.display = "none";
           LibraryPage.style.display = "none";
           document.getElementById("notepad").style.animation = "fadeInLeft 0.5s ease";
           document.getElementById("dictionaryList").style.display = "none";
           Recentpage.style.display = "none";
       })
       //for Recent 
         function saveToRecent(bookId, bookTitle, bookImage) {
    let recentBooks = JSON.parse(localStorage.getItem('recentBooks')) || [];

    // Remove the book if it's already in the list
    recentBooks = recentBooks.filter(book => book.id !== bookId);

    // Add the new book to the beginning of the list
    recentBooks.unshift({ id: bookId, title: bookTitle, image: bookImage });

    // Limit the list to 10 recent items
    if (recentBooks.length > 10) {
        recentBooks.pop();
    }

    // Save updated list to local storage
    localStorage.setItem('recentBooks', JSON.stringify(recentBooks));

    displayRecentBooks();
}

// Function to display recent books
function displayRecentBooks() {
    const recentContainer = document.querySelector('#recentContainer');
    let recentBooks = JSON.parse(localStorage.getItem('recentBooks')) || [];
    
    recentContainer.innerHTML = '';

    recentBooks.forEach(book => {
        recentContainer.innerHTML += `
            <div class="recent-book" data-id="${book.id}">
                <img src="${book.image}" width="95" height="105">
                <h6>${book.title}</h6>
            </div>
        `;
    });

    // Add click event listeners to the recent books
    document.querySelectorAll('.recent-book').forEach(book => {
        book.addEventListener('click', function() {
            const bookId = this.getAttribute('data-id');
            goToBookPage(bookId);
        });
    });
}

// Function to navigate to the book page
function goToBookPage(bookId) {
    // Here you can define the logic to go to the specific book's page
    // For example, assuming the book pages are named like "profile-book{id}.html"
    window.location.assign(`/Profilelist/profile-book${bookId}.html`);
}

// Function to clear recent books
function clearRecentBooks() {
    localStorage.removeItem('recentBooks');
    displayRecentBooks();
}

// Add click event listeners to book items
document.querySelectorAll('.book-item').forEach(book => {
    book.addEventListener('click', function() {
        const bookId = this.getAttribute('id');
        const bookTitle = this.querySelector('h6') ? this.querySelector('h6').innerText : 'Untitled';
        const bookImage = this.querySelector('img').src;

        saveToRecent(bookId, bookTitle, bookImage);
    });
});

// Add click event listener to clear button
document.querySelector('#clearRecentBtn').addEventListener('click', clearRecentBooks);

// Display recent books on page load
document.addEventListener('DOMContentLoaded', displayRecentBooks);

  document.addEventListener('DOMContentLoaded', function() {
    // Get all list items with class "book-item"
    const bookItems = document.querySelectorAll('.book-item');

    // Loop through each list item
    bookItems.forEach(item => {
      // Add click event listener to each item
      item.addEventListener('click', function() {
        // Get the id of the clicked item
        const id = this.id;

        // Navigate to the corresponding profile page
        window.location.href = `/Profilelist/profile-book${id}.html`;
      });
    });
  });
     
     //Game Progress
     let progressbar1 = document.getElementById("progressbar1");    
     let progressbar2 = document.getElementById("progressbar2");
     let progressbar3 = document.getElementById("progressbar3");
     let easyscore = document.getElementById("EasyScore");
     let normalscore = document.getElementById("NormalScore");
     let difficultscore = document.getElementById("DifficultScore");    
     if (localStorage.getItem("Easyscore")){
    easyscore.textContent = ": " + localStorage.getItem("Easyscore");
}else{
        easyscore.textContent = ": None" ;
}
    if (localStorage.getItem("Normalscore")){
    normalscore.textContent = ": " + localStorage.getItem("Normalscore");
}else{
        normalscore.textContent = ": None" ;
}  
     if (localStorage.getItem("Difficultscore")){
    difficultscore.textContent = ": " + localStorage.getItem("Difficultscore");
}else{
        difficultscore.textContent = ": None" ;
}
    if (localStorage.getItem("Easyscore") == 5){
    progressbar1.style.width = "50%";
    progressbar1.style.background = "green";
}
  if (localStorage.getItem("Easyscore") == 1){
    progressbar1.style.width = "10%";
    progressbar1.style.background = "red";
}
  if (localStorage.getItem("Easyscore") == 2){
    progressbar1.style.width = "25%";
    progressbar1.style.background = "yellow";
}
 // for Email Rate
    function SendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        Message : document.getElementById("Message").value
    }
    emailjs.send("service_7ql0aza", "template_warzj8e" , params).then(function (res){
        console.log("success" , + res.status);
        console.log(Message.value)
    })
}
     
     