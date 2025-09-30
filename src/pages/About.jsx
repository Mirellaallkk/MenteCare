// Importações necessárias
import { Link } from 'react-router-dom'; // Usado para navegação entre páginas sem recarregar o site
import { Button } from '../components/Button'; // Importa um botão reutilizável
import { Card } from '../components/Card';

// Componente funcional "About"
export const About = () => {

  return (
    <div className="py-12 space-y-16"> {/* Container principal com espaçamento entre seções */}

      {/* Seção Hero (introdução com logo e descrição) */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Facilitando o acesso ao 
atendimento psicológico </h1>

          <p className='mb-3'> O Sistema de Agendamento de Atendimento Psicológico é uma plataforma web que visa otimizar o
processo de marcação e gestão de atendimentos psicológicos voluntários. Voltado para instituições
como universidades, ONGs e projetos sociais, o sistema oferece uma solução digital que organiza as
agendas, registra históricos de sessões, gera relatórios e analisa padrões de risco emocional com
auxílio de inteligência artificial.</p>
          </div>
          <div className='flex  items-stretch justify-center space-x-4 w-auto h-auto pt-2'>
            <Card className=' bg-background'>
              <h1 className='font-bold text-2xl text-[#5d3bae]'>Quem somos</h1>
              <p className='text-[#8676c2]'>Somos um sistema criado para <br/>facilitar o agendamento de atendimentos psicológicos,<br/> oferecendo praticidade tanto para <br/>profissionais quanto para pacientes.</p>
            </Card>
            <Card className='bg-background'>
              <h1 className='font-bold text-2xl text-[#5d3bae]'>Nossa missão </h1>
              <p className='text-[#8676c2]'>Promover saúde mental por meio <br/> da tecnologia, tornando o acesso ao <br/>atendimento mais rápido, organizado e acessível.</p>
            </Card>
            <Card className='bg-background'>
              <h1 className='font-bold text-2xl text-[#5d3bae]'>Como funciona </h1>
              <p className='text-[#8676c2]'>Com poucos cliques, você agenda sua sessão<br/> de forma simples e segura, sem burocracias<br/> e com lembretes automáticos para <br/>não perder nenhum compromisso.</p>
            </Card>
          </div>
      </section>
    </div>
  );
};
