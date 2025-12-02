class YouTubeLiveClone {
    constructor() {
        this.likeCount = 1790;
        this.viewerCount = 1783;
        this.isLiked = false;
        this.isDisliked = false;
        this.isSubscribed = false;
        this.messageQueue = [];
        this.messageIndex = 0;
        
        this.defaultMessages = [
          { username: "Karen G.", text: "Girls, honestly… I had to stop doing that Korean pink salt trick ‘cause I was dropping weight way too fast and all my clothes were hanging off me." },
          { username: "Susan Parker", text: "Adelle, you literally saved my life! I lost 64 pounds in just 2 months with this recipe and finally got my pre-diabetes under control. Seriously, thank you so much for the tip.🥰", avatar: "/placeholder.svg?height=24&width=24" },
          { username: "Lisa R. Thompson", text: "There were so many “pink salt tricks” all over the internet that I didn’t buy it at first. But then I tried the Korean one and realized I was just making it wrong before! Down 26 pounds in 18 days.", avatar: "/placeholder.svg?height=24&width=24" },
          { username: "Christine Foster", text: "I dropped 25 pounds just to fit into my wedding dress, and looking back at the pictures now, I realized it’s the first time in years I’ve actually liked how I look in a photo.", avatar: "/placeholder.svg?height=24&width=24" },
          { username: "Michelle Lynn Anderson", text: "I waited 30 days before saying anything about this trick… now I’m on day 35 and 34 pounds down, and my waist looks like it did in my 20s🫣", avatar: "/placeholder.svg?height=24&width=24" }
        ];

        this.additionalMessages = [
          { username: "Brenda", text: "Best video I've watched in months! 🙏🏻I'm a mom of two boys and I barely have time to breathe, let alone diet or hit the gym. I started the pink salt trick and boom—14 pounds gone in 10 days.", avatar: "/placeholder.svg?height=24&width=24" },
          { username: "Jennifer Collins", text: "Has anyone else tried it for that stubborn menopause belly fat? It worked wonders for me! I'm heading into week three and so happy my shirts don't cling to my stomach anymore.", avatar: "/placeholder.svg?height=24&width=24" },
          { username: "Angela Brooks", text: "All I'm gonna say is: Do it!! It's simple, everyone's got the ingredients at home, and it takes less than 5 minutes.", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Stephanie N. Turner", text: "Me and my friends love Adele, and when we saw her tip we started doing it the same day! And guess what—15 pounds gone. Can you believe it?", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Monica Jo", text: "Ladies, be careful! I've been having to eat pizza and burgers every night 'cause I was losing too much weight and my husband got worried. Just stick to one glass a day!", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Melissa J. Davis", text: "I was super skeptical at first, but I tried this Korean recipe and I've already lost over 20 pounds in just two weeks. Thank you!!", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Sarah M.", text: "Everyone at work thinks I got lipo because of this pink salt recipe 😂", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Jessica Miller", text: "My husband can't keep his hands off me since I dropped 28 pounds with this Korean trick🔥", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Nicole Taylor", text: "Adele, you're my queen! Thanks for sharing this recipe. I started just 3 days ago and I've already lost 6 pounds.", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Olivia Smith", text: "This recipe literally saved my life! I was overweight with high blood sugar, and it helped me lose weight and get my numbers under control.", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Lauren H. Scott", text: "After 21 days using this pink salt, I'm down 17 pounds. Thank you sooo much!!!", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Danielle Martinez", text: "Finally someone shared this recipe!!! 🙌🏽", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Stephanie J. Hudson", text: "After trying every diet out there, I finally lost real weight—no more yo-yo effect. Truly grateful.", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Samantha P.", text: "My doctor actually told me to eat more burgers and pizza so I don't lose too much weight after starting this recipe 😮", avatar: "/placeholder.svg?height=24&width=24" },
        { username: "Diana Armstrong", text: "Ladies, don't overdo it! I had two glasses yesterday and woke up with my belly super flat today. This stuff is strong.", avatar: "/placeholder.svg?height=24&width=24" },
        ];

        this.comments = [
            { 
                author: "Jennifer Anderson", 
                text: "All I'm gonna say is: Do it!! It's simple, everyone's got the ingredients at home, and it takes less than 5 minutes.\n\nI had to stop doing this red gelatin 'cause I was dropping weight way too fast and all my clothes were hanging off me.",
                likes: 12
            },
            { 
                author: "Marjorie Whitlock", 
                text: "Has anyone else tried it for that stubborn menopause belly fat? It worked wonders for me! I'm heading into week three and so happy my shirts don't cling to my stomach anymore.",
                likes: 8
            },
            { 
                author: "Eulalia Ravenscroft", 
                text: "I tried so many gelatin tricks all over the internet that I didn't believe it at first.\n\nBut then I tried this Red one and realized I was just making it wrong before!\n\nDown 26 pounds in 18 days.\n\nMy husband can't keep his hands off my waist now",
                likes: 15
            },
            { 
                author: "Michelle Carter", 
                text: "I dropped 25 pounds with this dessert just to fit into my wedding dress, and looking back at the pictures now, I realized it's the first time in years I've actually liked how I look in a photo.",
                likes: 9
            },
            { 
                author: "Tamsin Fairchild", 
                text: "I waited 30 days before saying anything about this trick… now I'm on day 35 and 34 pounds down, and my waist looks like it did in my 20s🫣",
                likes: 11
            },
            { 
                author: "Shoshanna Mirecourt", 
                text: "Doc, you literally saved my life! I lost 64 pounds in just 2 months with this recipe and finally got my pre-diabetes under control. Seriously, thank you so much for the tip.🥰",
                likes: 18
            },
            { 
                author: "Rebecca Collins", 
                text: "Best video I've watched in months! 🙏🏻I'm a mom of two boys and I barely have time to breathe, let alone diet or hit the gym. I started the pink salt trick and boom—14 pounds gone in 10 days.",
                likes: 7
            },
            { 
                author: "Corinne Harlow", 
                text: "Everyone at work thinks I got lipo because of this red gelatin 😂",
                likes: 5
            }
        ];

        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadInitialMessages();
        this.startLikeIncrement();
        this.startViewerCountUpdate();
        this.startMessageQueue();
        this.loadComments();
    }
    
    setupEventListeners() {
        // Like button
        document.getElementById('likeBtn').addEventListener('click', () => {
            this.toggleLike();
        });
        
        // Dislike button
        document.getElementById('dislikeBtn').addEventListener('click', () => {
            this.toggleDislike();
        });
        
        // Subscribe button
        document.getElementById('subscribeBtn').addEventListener('click', () => {
            this.toggleSubscribe();
        });
            
        // Chat input
        const messageInput = document.getElementById('messageInput');
        const sendBtn = document.getElementById('sendBtn');
        
        sendBtn.addEventListener('click', () => {
            this.sendMessage();
        });
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Search button
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        const keyboardBtn = document.getElementById('keyboardBtn');
        
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.handleSearch();
            });
        }
        
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }
        
        if (keyboardBtn) {
            keyboardBtn.addEventListener('click', () => {
                this.handleKeyboardToggle();
            });
        }
        
        // Voice search button
        const voiceSearchBtn = document.getElementById('voiceSearchBtn');
        if (voiceSearchBtn) {
            voiceSearchBtn.addEventListener('click', () => {
                this.handleVoiceSearch();
            });
        }
        
        // Mobile search button
        const mobileSearchBtn = document.getElementById('mobileSearchBtn');
        if (mobileSearchBtn) {
            mobileSearchBtn.addEventListener('click', () => {
                this.handleMobileSearch();
            });
        }
    }
    
    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && searchInput.value.trim()) {
            // Aqui você pode adicionar a lógica de busca
            console.log('Buscando por:', searchInput.value);
        }
    }
    
    handleVoiceSearch() {
        // Aqui você pode adicionar a lógica de pesquisa por voz
        console.log('Pesquisa por voz ativada');
    }
    
    handleKeyboardToggle() {
        // Aqui você pode adicionar a lógica para mostrar/ocultar teclado virtual
        console.log('Ferramentas de entrada');
    }
    
    handleMobileSearch() {
        // Mostra/esconde a barra de pesquisa no mobile
        const headerCenter = document.querySelector('.header-center');
        if (headerCenter) {
            headerCenter.classList.toggle('mobile-active');
            const searchInput = document.getElementById('searchInput');
            if (headerCenter.classList.contains('mobile-active') && searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
        }
    }
    
    loadInitialMessages() {
        const chatMessages = document.getElementById('chatMessages');
        
        this.defaultMessages.forEach((message, index) => {
            setTimeout(() => {
                this.addMessageToChat(message);
            }, index * 500);
        });
    }
    
    addMessageToChat(message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        
        messageElement.innerHTML = `

            <div class="chat-content">
                <span class="chat-username">${message.username}</span>
                <span class="chat-text">${message.text}</span>
            </div>
        `;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    startMessageQueue() {
        setInterval(() => {
            if (this.messageIndex < this.additionalMessages.length) {
                this.addMessageToChat(this.additionalMessages[this.messageIndex]);
                this.messageIndex++;
            } else {
                // Reset and shuffle messages
                this.messageIndex = 0;
                this.shuffleArray(this.additionalMessages);
            }
        }, 8000 + Math.random() * 7000); // Between 8-15 seconds
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    startLikeIncrement() {
        setInterval(() => {
            if (Math.random() < 0.7) { // 70% chance to increment
                this.likeCount += Math.floor(Math.random() * 3) + 1;
                document.getElementById('likeCount').textContent = this.formatNumber(this.likeCount);
            }
        }, 3000 + Math.random() * 4000); // Between 3-7 seconds
    }
    
    startViewerCountUpdate() {
        setInterval(() => {
            const change = Math.floor(Math.random() * 21) - 10; // -10 to +10
            this.viewerCount = Math.max(1000, this.viewerCount + change);
            
            document.getElementById('viewerCount').textContent = this.formatNumber(this.viewerCount);
            document.getElementById('chatViewerCount').textContent = this.formatNumber(this.viewerCount);
        }, 5000 + Math.random() * 5000); // Between 5-10 seconds
    }
    
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
    
    toggleLike() {
        const likeBtn = document.getElementById('likeBtn');
        const dislikeBtn = document.getElementById('dislikeBtn');
        
        if (this.isLiked) {
            this.isLiked = false;
            likeBtn.classList.remove('active');
            this.likeCount--;
        } else {
            this.isLiked = true;
            likeBtn.classList.add('active');
            this.likeCount++;
            
            if (this.isDisliked) {
                this.isDisliked = false;
                dislikeBtn.classList.remove('active');
            }
        }
        
        document.getElementById('likeCount').textContent = this.formatNumber(this.likeCount);
    }
    
    toggleDislike() {
        const likeBtn = document.getElementById('likeBtn');
        const dislikeBtn = document.getElementById('dislikeBtn');
        
        if (this.isDisliked) {
            this.isDisliked = false;
            dislikeBtn.classList.remove('active');
        } else {
            this.isDisliked = true;
            dislikeBtn.classList.add('active');
            
            if (this.isLiked) {
                this.isLiked = false;
                likeBtn.classList.remove('active');
                this.likeCount--;
                document.getElementById('likeCount').textContent = this.formatNumber(this.likeCount);
            }
        }
    }
    
    toggleSubscribe() {
        const subscribeBtn = document.getElementById('subscribeBtn');
        
        if (this.isSubscribed) {
            this.isSubscribed = false;
            subscribeBtn.classList.remove('subscribed');
            subscribeBtn.innerHTML = '<i class="fas fa-bell"></i> Subscribe';
        } else {
            this.isSubscribed = true;
            subscribeBtn.classList.add('subscribed');
            subscribeBtn.innerHTML = '<i class="fas fa-bell"></i> Subscribed';
        }
    }
        
    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const messageText = messageInput.value.trim();
        
        if (messageText) {
            const userMessage = {
                username: 'You',
                text: messageText,
                avatar: '/placeholder.svg?height=24&width=24'
            };
            
            this.addMessageToChat(userMessage);
            messageInput.value = '';
            
            // Simulate occasional auto-reply
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    const responses = [
                        { username: "Dr. Angela Torres", text: "Thanks for the comment! ❤️", avatar: "/placeholder.svg?height=24&width=24" },
                        { username: "Moderator", text: "Welcome to the chat!", avatar: "/placeholder.svg?height=24&width=24" }
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    this.addMessageToChat(randomResponse);
                }, 2000 + Math.random() * 3000);
            }
        }
    }
    
    loadComments() {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) return;
        
        // Gera timestamps variados (máximo uma semana)
        const now = new Date();
        const timestamps = this.comments.map((_, index) => {
            const daysAgo = Math.floor(Math.random() * 7); // 0 a 6 dias
            const hoursAgo = Math.floor(Math.random() * 24); // 0 a 23 horas
            const date = new Date(now);
            date.setDate(date.getDate() - daysAgo);
            date.setHours(date.getHours() - hoursAgo);
            return date;
        });
        
        // Ordena por data (mais recentes primeiro)
        const commentsWithDates = this.comments.map((comment, index) => ({
            ...comment,
            date: timestamps[index]
        })).sort((a, b) => b.date - a.date);
        
        commentsList.innerHTML = '';
        
        commentsWithDates.forEach((comment, index) => {
            const commentElement = this.createCommentElement(comment, index);
            commentsList.appendChild(commentElement);
        });
    }
    
    createCommentElement(comment, index) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment-item';
        
        const timeAgo = this.getTimeAgo(comment.date);
        
        commentDiv.innerHTML = `
            <div class="comment-content">
                <div class="comment-author">
                    <span class="comment-author-name">@${comment.author.toLowerCase().replace(/\s+/g, '')}</span>
                    <span class="comment-time">${timeAgo}</span>
                </div>
                <div class="comment-text">${this.formatCommentText(comment.text)}</div>
                <div class="comment-actions">
                    <button class="comment-like-btn" data-comment-index="${index}">
                        <i class="far fa-thumbs-up"></i>
                        <span class="like-count">${comment.likes}</span>
                    </button>
                    <button class="comment-dislike-btn" data-comment-index="${index}">
                        <i class="far fa-thumbs-down"></i>
                    </button>
                </div>
            </div>
            <button class="comment-menu-btn">
                <i class="fas fa-ellipsis-v"></i>
            </button>
        `;
        
        // Adiciona event listeners para like/dislike
        const likeBtn = commentDiv.querySelector('.comment-like-btn');
        const dislikeBtn = commentDiv.querySelector('.comment-dislike-btn');
        
        likeBtn.addEventListener('click', () => {
            this.toggleCommentLike(index, likeBtn, dislikeBtn);
        });
        
        dislikeBtn.addEventListener('click', () => {
            this.toggleCommentDislike(index, likeBtn, dislikeBtn);
        });
        
        return commentDiv;
    }
    
    formatCommentText(text) {
        // Converte quebras de linha em <br>
        return text.split('\n').map(line => line.trim()).filter(line => line).join('<br>');
    }
    
    getTimeAgo(date) {
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);
        
        if (diffMins < 60) {
            return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
        } else if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
        } else if (diffDays < 7) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
        } else {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        }
    }
    
    toggleCommentLike(index, likeBtn, dislikeBtn) {
        const isActive = likeBtn.classList.contains('active');
        const likeCountSpan = likeBtn.querySelector('.like-count');
        let currentLikes = parseInt(likeCountSpan.textContent) || 0;
        
        if (isActive) {
            likeBtn.classList.remove('active');
            currentLikes = Math.max(0, currentLikes - 1);
        } else {
            likeBtn.classList.add('active');
            currentLikes += 1;
            if (dislikeBtn.classList.contains('active')) {
                dislikeBtn.classList.remove('active');
            }
        }
        
        likeCountSpan.textContent = currentLikes;
    }
    
    toggleCommentDislike(index, likeBtn, dislikeBtn) {
        const isActive = dislikeBtn.classList.contains('active');
        
        if (isActive) {
            dislikeBtn.classList.remove('active');
        } else {
            dislikeBtn.classList.add('active');
            if (likeBtn.classList.contains('active')) {
                likeBtn.classList.remove('active');
                const likeCountSpan = likeBtn.querySelector('.like-count');
                let currentLikes = parseInt(likeCountSpan.textContent) || 0;
                likeCountSpan.textContent = Math.max(0, currentLikes - 1);
            }
        }
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new YouTubeLiveClone();
    initQuizModal();
});

// Quiz Modal Controller
function initQuizModal() {
    const openBtn = document.getElementById('openQuizModal');
    const modal = document.getElementById('quizModal');
    const overlay = document.getElementById('quizModalOverlay');
    const btnPrevious = document.getElementById('btnPrevious');
    const btnCalculate = document.getElementById('btnCalculate');
    
    let currentQuestion = 0;
    let questions = [];
    let totalQuestions = 0;

    // Verifica periodicamente se o modal está visível (quando .esconder é alterada)
    if (modal) {
        const checkModalVisibility = () => {
            const style = window.getComputedStyle(modal);
            // Se o modal estiver visível (display não é none) e não estiver ativo, abre automaticamente
            if (style.display !== 'none' && style.display !== '' && !modal.classList.contains('active')) {
                openModal();
            }
        };

        // Verifica a cada 500ms se o modal ficou visível
        setInterval(checkModalVisibility, 500);

        // Também observa mudanças no atributo style
        const observer = new MutationObserver(() => {
            checkModalVisibility();
        });

        observer.observe(modal, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }

    // Abrir modal (mantido para o botão ainda funcionar)
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            openModal();
        });
    }

    // Botão Previous - volta para pergunta anterior ou fecha o modal se estiver na primeira
    if (btnPrevious) {
        btnPrevious.addEventListener('click', () => {
            if (currentQuestion > 0) {
                currentQuestion--;
                showQuestion(currentQuestion);
            } else {
                // Fecha o modal adicionando display: none diretamente no elemento, sem mexer na classe esconder
                if (modal) {
                    modal.style.display = 'none';
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }

    // Botão Calculate - avança para a tela de loading
    if (btnCalculate) {
        btnCalculate.addEventListener('click', () => {
            // Avança para a tela de loading
            currentQuestion++;
            if (currentQuestion < totalQuestions) {
                showQuestion(currentQuestion);
                // Inicia a animação da barra de progresso
                startLoadingAnimation();
            }
        });
    }

    // Mostra apenas a pergunta especificada
    function showQuestion(index) {
        questions.forEach((question, i) => {
            if (i === index) {
                question.classList.add('active');
            } else {
                question.classList.remove('active');
            }
        });

        const currentQuestion = questions[index];
        const quizFooter = document.querySelector('.quiz-footer');
        const quizHeader = document.querySelector('.quiz-header');
        const quizContent = document.querySelector('.quiz-modal-content');
        const btnCalculate = document.getElementById('btnCalculate');

        // Aumenta a largura do modal na tela de Congratulations e Ofertas
        if (quizContent) {
            if (currentQuestion && (currentQuestion.classList.contains('congratulations-screen') || currentQuestion.classList.contains('offers-screen'))) {
                quizContent.classList.add('wide-modal');
            } else {
                quizContent.classList.remove('wide-modal');
            }
        }

        // Oculta o header na tela de loading, Congratulations e Ofertas
        if (quizHeader) {
            if (currentQuestion && (currentQuestion.classList.contains('loading-screen') || currentQuestion.classList.contains('congratulations-screen') || currentQuestion.classList.contains('offers-screen'))) {
                quizHeader.style.display = 'none';
            } else {
                quizHeader.style.display = 'block';
            }
        }

        // Controla a visibilidade do botão Calculate (só aparece na pergunta 5 - checkboxes)
        if (btnCalculate) {
            // Pergunta 5 é a de checkboxes (índice 4, pois começa em 0)
            if (index === 4) {
                btnCalculate.style.display = 'block';
            } else {
                btnCalculate.style.display = 'none';
            }
        }

        // Oculta o footer na tela de loading, Congratulations e Ofertas
        if (quizFooter) {
            if (currentQuestion && (currentQuestion.classList.contains('loading-screen') || currentQuestion.classList.contains('congratulations-screen') || currentQuestion.classList.contains('offers-screen'))) {
                quizFooter.style.display = 'none';
            } else {
                quizFooter.style.display = 'flex';
            }
        }

        // Rola suavemente para o topo do modal quando muda de pergunta
        setTimeout(() => {
            if (modal) {
                modal.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }, 150);
    }

    // Inicia a animação da barra de progresso
    function startLoadingAnimation() {
        const progressFill = document.getElementById('loadingProgressFill');
        const loadingTime = document.getElementById('loadingTime');
        const loadingStatus = document.getElementById('loadingStatus');
        
        if (!progressFill || !loadingTime || !loadingStatus) return;

        let progress = 0;
        let timeRemaining = 10;
        const totalTime = 10000; // 10 segundos em milissegundos
        const startTime = Date.now();

        // Atualiza o tempo restante imediatamente
        loadingTime.textContent = `Time remaining: ${timeRemaining} seconds`;

        // Função de easing: rápido no começo, lento no final (ease-out)
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        const statusMessages = [
            'Calculating BMI and lean mass…',
            'Analyzing metabolic rate…',
            'Optimizing nutrient ratios…',
            'Finalizing your formula…'
        ];
        let statusIndex = 0;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const normalizedTime = Math.min(elapsed / totalTime, 1);
            
            // Aplica easing para começar rápido e terminar lento
            const easedProgress = easeOutCubic(normalizedTime);
            progress = easedProgress * 100;

            // Atualiza a barra de progresso
            progressFill.style.width = progress + '%';

            // Atualiza o tempo restante
            timeRemaining = Math.max(0, Math.ceil((totalTime - elapsed) / 1000));
            loadingTime.textContent = `Time remaining: ${timeRemaining} second${timeRemaining !== 1 ? 's' : ''}`;

            // Atualiza o status a cada 25% de progresso
            const newStatusIndex = Math.floor(easedProgress * statusMessages.length);
            if (newStatusIndex !== statusIndex && newStatusIndex < statusMessages.length) {
                statusIndex = newStatusIndex;
                loadingStatus.textContent = statusMessages[statusIndex];
            }

            // Quando completar
            if (normalizedTime >= 1) {
                clearInterval(interval);
                progressFill.style.width = '100%';
                loadingTime.textContent = 'Time remaining: 0 seconds';
                loadingStatus.textContent = 'Formula ready!';
                
                // Avança para a tela de Congratulations após 1 segundo
                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < totalQuestions) {
                        showQuestion(currentQuestion);
                    }
                }, 1000);
            }
        }, 50); // Atualiza a cada 50ms para animação suave
    }

    // Event delegation para os botões de opção (evita listeners duplicados)
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-option')) {
                const button = e.target;
                
                // Se for o botão final (última etapa), permite navegação normal
                if (button.classList.contains('btn-final')) {
                    return;
                }
                
                // Para todos os outros botões, previne o comportamento padrão
                e.preventDefault();
                
                // Rola para o topo imediatamente ao clicar
                if (modal) {
                    modal.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
                
                // Move para a próxima pergunta
                currentQuestion++;
                
                if (currentQuestion < totalQuestions) {
                    showQuestion(currentQuestion);
                } else {
                    // Final do quiz - por enquanto fecha o modal
                    // Aqui você pode adicionar lógica para finalizar o quiz
                    closeModal();
                }
            }
            
            // Botão Unlock - avança para a tela de ofertas
            if (e.target.classList.contains('btn-unlock') || e.target.closest('.btn-unlock')) {
                e.preventDefault();
                // Avança para a tela de ofertas
                currentQuestion++;
                if (currentQuestion < totalQuestions) {
                    showQuestion(currentQuestion);
                } else {
                    closeModal();
                }
            }
        });
    }

    // Atualiza apenas os controles (header, footer, botões) sem alterar as perguntas
    function updateModalControls() {
        const activeQuestion = document.querySelector('.question-step.active');
        if (!activeQuestion) return;
        
        const questionIndex = Array.from(questions).indexOf(activeQuestion);
        if (questionIndex === -1) return;
        
        currentQuestion = questionIndex;
        
        const quizFooter = document.querySelector('.quiz-footer');
        const quizHeader = document.querySelector('.quiz-header');
        const quizContent = document.querySelector('.quiz-modal-content');
        const btnCalculate = document.getElementById('btnCalculate');

        // Aumenta a largura do modal na tela de Congratulations e Ofertas
        if (quizContent) {
            if (activeQuestion.classList.contains('congratulations-screen') || activeQuestion.classList.contains('offers-screen')) {
                quizContent.classList.add('wide-modal');
            } else {
                quizContent.classList.remove('wide-modal');
            }
        }

        // Oculta o header na tela de loading, Congratulations e Ofertas
        if (quizHeader) {
            if (activeQuestion.classList.contains('loading-screen') || activeQuestion.classList.contains('congratulations-screen') || activeQuestion.classList.contains('offers-screen')) {
                quizHeader.style.display = 'none';
            } else {
                quizHeader.style.display = 'block';
            }
        }

        // Controla a visibilidade do botão Calculate (só aparece na pergunta 5 - checkboxes)
        if (btnCalculate) {
            if (questionIndex === 4) {
                btnCalculate.style.display = 'block';
            } else {
                btnCalculate.style.display = 'none';
            }
        }

        // Oculta o footer na tela de loading, Congratulations e Ofertas
        if (quizFooter) {
            if (activeQuestion.classList.contains('loading-screen') || activeQuestion.classList.contains('congratulations-screen') || activeQuestion.classList.contains('offers-screen')) {
                quizFooter.style.display = 'none';
            } else {
                quizFooter.style.display = 'flex';
            }
        }
    }

    function openModal() {
        if (modal) {
            // Atualiza as referências das perguntas quando o modal abre
            questions = document.querySelectorAll('.question-step');
            totalQuestions = questions.length;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Atualiza apenas os controles baseado na pergunta que já está ativa
            updateModalControls();
            
            // Rola para o topo
            setTimeout(() => {
                if (modal) {
                    modal.scrollTop = 0;
                }
            }, 10);
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            currentQuestion = 0;
            
            // Garante que apenas a primeira pergunta esteja ativa ao fechar
            if (questions.length > 0) {
                questions.forEach((question, i) => {
                    if (i === 0) {
                        question.classList.add('active');
                    } else {
                        question.classList.remove('active');
                    }
                });
            }
        }
    }
}