<!-- src/views/MemoryGameView.vue -->
<template>
    <div>
      <div class="page-header bg-primary text-white py-5">
        <div class="container">
          <h1 class="display-4">Игра "Мемо" с выдающимися личностями ЛЭТИ</h1>
          <p class="lead">Проверьте свою память и узнайте больше о знаменитых учёных и исследователях университета</p>
        </div>
      </div>
  
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="card shadow-sm mb-4">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 class="mb-0">Ходы: {{ moves }}</h5>
                  </div>
                  <div>
                    <h5 class="mb-0">Найдено пар: {{ matchedPairs }} из {{ totalPairs }}</h5>
                  </div>
                  <div>
                    <button class="btn btn-primary" @click="resetGame">Новая игра</button>
                  </div>
                </div>
  
                <div v-if="gameCompleted" class="alert alert-success mb-4">
                  <h4><i class="bi bi-trophy me-2"></i>Поздравляем!</h4>
                  <p>Вы нашли все пары за {{ moves }} ходов!</p>
                </div>
  
                <div class="memory-game-grid">
                  <div 
                    v-for="(card, index) in cards" 
                    :key="index" 
                    class="memory-card" 
                    :class="{ 'flipped': card.flipped, 'matched': card.matched }"
                    @click="flipCard(index)"
                  >
                    <div class="memory-card-inner">
                      <div class="memory-card-front">
                        <img :src="`/api/placeholder/150/200`" alt="ЛЭТИ" class="img-fluid">
                      </div>
                      <div class="memory-card-back">
                        <img :src="card.image" :alt="card.name" class="img-fluid">
                        <div class="memory-card-caption">
                          <h6 class="mb-0">{{ card.name }}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="card shadow-sm">
              <div class="card-body">
                <h4 class="card-title text-primary mb-4">Как играть</h4>
                <ol>
                  <li>Игра состоит из карточек, которые лежат лицом вниз.</li>
                  <li>Нажмите на карточку, чтобы перевернуть её.</li>
                  <li>Переверните две карточки, чтобы найти совпадающую пару.</li>
                  <li>Если карточки совпадают, они останутся открытыми.</li>
                  <li>Если карточки не совпадают, они будут перевернуты обратно.</li>
                  <li>Цель игры - найти все пары с минимальным количеством ходов.</li>
                </ol>
                <p class="mb-0">
                  Игра не только проверяет вашу память, но и помогает узнать больше о выдающихся личностях, внесших вклад в историю ЛЭТИ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MemoryGameView',
    data() {
      return {
        cards: [],
        moves: 0,
        matchedPairs: 0,
        totalPairs: 0,
        flippedCards: [],
        gameCompleted: false,
        locked: false
      }
    },
    created() {
      this.initializeGame()
    },
    methods: {
      initializeGame() {
        // Data for the memory game
        const persons = [
          {
            id: 1,
            name: 'Александр Попов',
            image: '/api/placeholder/150/200'
          },
          {
            id: 2,
            name: 'Жорес Алфёров',
            image: '/api/placeholder/150/200'
          },
          {
            id: 3,
            name: 'Владимир Сифоров',
            image: '/api/placeholder/150/200'
          },
          {
            id: 4,
            name: 'Дмитрий Акселерод',
            image: '/api/placeholder/150/200'
          },
          {
            id: 5,
            name: 'Николай Розинг',
            image: '/api/placeholder/150/200'
          },
          {
            id: 6,
            name: 'Имант Фрейманис',
            image: '/api/placeholder/150/200'
          }
        ]
        
        // Create pairs of cards
        let cardPairs = []
        persons.forEach(person => {
          // Create two identical cards for each person
          const card1 = {
            id: person.id,
            name: person.name,
            image: person.image,
            flipped: false,
            matched: false
          }
          
          const card2 = {
            id: person.id,
            name: person.name,
            image: person.image,
            flipped: false,
            matched: false
          }
          
          cardPairs.push(card1, card2)
        })
        
        // Shuffle cards
        this.cards = this.shuffleArray(cardPairs)
        this.totalPairs = persons.length
        this.matchedPairs = 0
        this.moves = 0
        this.flippedCards = []
        this.gameCompleted = false
        this.locked = false
      },
      shuffleArray(array) {
        let currentIndex = array.length
        let temporaryValue
        let randomIndex
        
        // While there remain elements to shuffle
        while (0 !== currentIndex) {
          // Pick a remaining element
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          
          // Swap it with the current element
          temporaryValue = array[currentIndex]
          array[currentIndex] = array[randomIndex]
          array[randomIndex] = temporaryValue
        }
        
        return array
      },
      flipCard(index) {
        // Prevent flipping if the game is locked or the card is already flipped/matched
        if (this.locked || this.cards[index].flipped || this.cards[index].matched) {
          return
        }
        
        // Flip the card
        this.cards[index].flipped = true
        this.flippedCards.push(index)
        
        // Check if we have flipped two cards
        if (this.flippedCards.length === 2) {
          this.moves++
          this.checkForMatch()
        }
      },
      checkForMatch() {
        this.locked = true
        
        const [firstIndex, secondIndex] = this.flippedCards
        const firstCard = this.cards[firstIndex]
        const secondCard = this.cards[secondIndex]
        
        if (firstCard.id === secondCard.id) {
          // Cards match
          firstCard.matched = true
          secondCard.matched = true
          this.matchedPairs++
          
          // Check if all pairs are found
          if (this.matchedPairs === this.totalPairs) {
            this.gameCompleted = true
          }
          
          this.flippedCards = []
          this.locked = false
        } else {
          // Cards don't match, flip them back
          setTimeout(() => {
            firstCard.flipped = false
            secondCard.flipped = false
            this.flippedCards = []
            this.locked = false
          }, 1000)
        }
      },
      resetGame() {
        this.initializeGame()
      }
    }
  }
  </script>
  
  <style scoped>
  .page-header {
    margin-top: 56px;
  }
  
  .memory-game-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    .memory-game-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 576px) {
    .memory-game-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .memory-card {
    perspective: 1000px;
    cursor: pointer;
    height: 200px;
  }
  
  .memory-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .memory-card.flipped .memory-card-inner {
    transform: rotateY(180deg);
  }
  
  .memory-card-front, .memory-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .memory-card-front {
    background-color: var(--bs-primary);
  }
  
  .memory-card-back {
    background-color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
  }
  
  .memory-card-back img {
    max-height: 160px;
    object-fit: cover;
  }
  
  .memory-card-caption {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    width: 100%;
    text-align: center;
  }
  
  .memory-card.matched .memory-card-inner {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    border: 2px solid var(--bs-primary);
  }
  </style>