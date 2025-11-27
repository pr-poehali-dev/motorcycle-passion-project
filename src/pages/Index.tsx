import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const motorcycles = [
    {
      year: '2021',
      price: '40 000 ₽',
      description: 'Начало пути',
      image: 'https://cdn.poehali.dev/projects/4a8d0d08-2673-4764-84f0-849c32f3f422/files/cda53d3d-67dc-4708-9b3e-12c80f5e8241.jpg',
      specs: ['Первый опыт', 'Азарт открытий', 'Каждый выезд — событие']
    },
    {
      year: '2025',
      price: '1 200 000 ₽',
      description: 'Вершина мощности',
      image: 'https://cdn.poehali.dev/projects/4a8d0d08-2673-4764-84f0-849c32f3f422/files/deffd544-3c10-4c00-b907-965837ca9bc3.jpg',
      specs: ['Самый мощный', 'Самый быстрый', 'Лидер категории']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url(https://cdn.poehali.dev/projects/4a8d0d08-2673-4764-84f0-849c32f3f422/files/85eba61f-095c-4490-9a9f-6179b54ff284.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-speed-line"></div>
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-speed-line" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 border-primary text-primary hover:bg-primary/30">
              🏍️ Адреналиновая зависимость
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              МОИ УВЛЕЧЕНИЯ
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-gray-200 leading-relaxed animate-slide-right" style={{ animationDelay: '0.3s' }}>
              <p>
                Мои увлечения разнообразные, я занимался <span className="text-muted-foreground line-through">боксом на протяжении 5 лет</span>, 
                но это не вызывало у меня эмоции как будто был не на своем месте.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                И в один прекрасный вечер у меня что-то ёкнуло «Я ХОЧУ МОТОЦИКЛ»
              </p>
              <p>
                Родители отговаривали, но всё равно одобрили. После этого моя жизнь не была прежней, 
                каждый выезд был для меня как первый, те же эмоции, та же радость.
              </p>
              <p className="text-secondary font-semibold text-xl">
                И после этого началась адреналиновая зависимость с каждым годом хотелось всё мощнее и мощнее.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </div>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">МОИ МОТОЦИКЛЫ</h2>
            <div className="flex items-center justify-center gap-4 text-xl">
              <span className="text-muted-foreground">2021</span>
              <div className="flex-1 max-w-md h-1 bg-gradient-to-r from-muted via-primary to-secondary rounded-full"></div>
              <span className="text-secondary font-bold">2025</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {motorcycles.map((bike, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 animate-slide-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={bike.image} 
                    alt={bike.description}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-primary text-white text-lg px-4 py-2">
                    {bike.year}
                  </Badge>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-end justify-between">
                    <h3 className="text-3xl font-bold text-white">{bike.description}</h3>
                    <span className="text-2xl font-bold text-primary">{bike.price}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {bike.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <Icon name="Zap" size={20} className="text-secondary" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {index === 1 && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground italic">
                        Самый мощный и быстрый мотоцикл в своей категории
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50">
              <div className="flex items-center gap-6 flex-wrap justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">30×</div>
                  <div className="text-sm text-muted-foreground">рост инвестиций</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">лет в пути</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">адреналина</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>Каждый выезд как первый — те же эмоции, та же радость 🏍️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
