// Importações necessárias
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import { motion } from 'framer-motion'; // Para animações suaves
import { Shield, Zap, Users, Calendar, Activity, FileText } from 'lucide-react'; // Ícones vetoriais
import { Button } from '../components/Button'; // Botão customizado do projeto
import { Card } from '../components/Card';


// Página inicial (Home)
export const Home = () => {
  // Lista de recursos/funcionalidades que serão exibidos na seção de "features"
  const features = [
    {
      icon: Calendar,
      title: 'Agendamento Rápido',
      description: 'Marque seu atendimento online de forma prática e rápida.'
    },
    {
      icon: Shield,
      title: 'Histórico de Sessões',
      description: 'Veja todo o histórico dos seus atendimentos em um só lugar.'
    },
    {
      icon: Activity,
      title: 'Lembretes Automáticos',
      description: 'Receba lembretes para não esquecer sua consulta.'
    },
    {
      icon: Users,
      title: 'Relatórios para Psicólogos',
      description: 'Relatórios completos para acompanhar a evolução do paciente.'
    },
    {
      icon: FileText,
      title: 'Análise com Inteligência Artificial',
      description: 'Análises inteligentes que ajudam no cuidado da sua saúde mental.'
    }
  ];

  return (
    <div className='-mt-20'>
      <div
      className="bg-cover bg-center min-h-screen "
      style={{ backgroundImage: "url('/bg.png')"  }}
    >

      {/* ================= HERO SECTION ================= */}
      <section id="features" className="min-h-screen flex items-center ">
        <div className="w-full">
          {/* Título da seção */}
          <div className="absolute left-8">
            <div className= " mt-44 ml-20 p-6 w-128 flex items-center justify-center text-center">
              <p className="text-white text-5xl font-semibold leading-relaxed">
                Agende seu<br />
                atendimento
                psicológico de<br />
                forma simples,
                rápida e segura
              </p>
            </div>
          </div>

          {/* Grid com os recursos (features) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl mx-auto mt-150">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} // Cada card aparece ao entrar na tela
                transition={{ delay: index * 0.1, duration: 0.6 }} // Delay incremental
                viewport={{ once: true }}
                className="text-center bg-violet-600 rounded-3xl shadow-2xl w-50 m-7"
              >
                {/* Ícone dentro de um card arredondado */}
                <div className="w-20 h-20   flex items-center justify-center mx-auto mb-6  ">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                {/* Título e descrição do recurso */}
                <h3 className="text-xl font-bold text-white mb-4 m-4">{feature.title}</h3>
                <p className="text-white leading-relaxed m-4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};
