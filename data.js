export const searchIndex = [
  {
    "id": "preamble",
    "title": "Preamble",
    "text": "guia completo de estudo: salesforce marketing cloud engagement (aprofundado) este documento é um guia de estudo abrangente e prático sobre o salesforce marketing cloud engagement, projetado para levar você desde os conceitos fundamentais até o domínio técnico e estratégico da plataforma. ele inclui explicações detalhadas, exemplos de código, exercícios práticos com soluções e estudos de caso realistas.   estrutura do guia:   1. introdução ao salesforce marketing cloud engagement 2. guia de aprendizado progressivo (iniciante, intermediário, especialista) 3. aprofundamento: email specialist 4. aprofundamento: marketing cloud administrator 5. estudo de caso avançado: campanha cross-channel 6. recursos adicionais e próximos passos     1. introdução ao salesforce marketing cloud o salesforce marketing cloud é uma plataforma de marketing digital líder de mercado, projetada para ajudar empresas de todos os tamanhos a se conectarem com seus clientes de maneira mais personalizada e eficaz em todos os pontos de contato. ele oferece um conjunto abrangente de ferramentas e funcionalidades que permitem aos profissionais de marketing criar, gerenciar, automatizar e otimizar jornadas de cliente em múltiplos canais, como email, mobile (sms, notificações push), mídias sociais, publicidade digital e web.   propósito e importância:   no cenário atual, onde os clientes esperam experiências personalizadas e relevantes, o marketing cloud se torna essencial. ele permite que as empresas:   * unifiquem dados do cliente: centralizem informações de diversas fontes (crm, vendas, serviços, comportamento online) para criar uma visão 360º do cliente. * segmentem audiências: criem segmentos de público altamente específicos com base em dados demográficos, comportamentais e de engajamento. * personalizem a comunicação: entreguem mensagens e ofertas personalizadas em escala, no canal certo e no momento certo. * automatizem jornadas: construam jornadas de cliente automatizadas e inteligentes que se adaptam ao comportamento individual. * engajem em múltiplos canais: coordenem campanhas de marketing através de email, mobile, social, web e publicidade. * analisem o desempenho: meçam o impacto das campanhas de marketing com análises e relatórios detalhados, permitindo a otimização contínua. * utilizem inteligência artificial (ia): aproveitem o poder do salesforce einstein (ia da salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas.   principais componentes (studios e builders):   o marketing cloud é composto por diversos módulos, conhecidos como \"studios\" e \"builders\", cada um focado em um aspecto específico do marketing digital:   * journey builder: ferramenta central para projetar e automatizar jornadas de cliente 1:1 em múltiplos canais e pontos de contato. permite criar fluxos baseados em gatilhos e comportamentos do cliente. * email studio: solução completa para criação, segmentação, envio, rastreamento e gerenciamento de campanhas de email marketing. inclui ferramentas para design de emails responsivos, testes a/b e gerenciamento de entregabilidade. * mobile studio: permite o engajamento com clientes através de canais mobile, incluindo sms, notificações push (para aplicativos móveis) e mensagens de chat (como whatsapp e facebook messenger). * social studio: plataforma para gerenciamento de mídias sociais, permitindo monitorar conversas, publicar conteúdo, engajar com a audiência e analisar o desempenho social. * advertising studio (ou marketing cloud advertising): conecta os dados de crm e marketing com plataformas de publicidade digital (como google ads, facebook ads, linkedin ads) para criar campanhas de aquisição, reengajamento e lookalike mais eficazes. * web studio: ferramenta para criar e gerenciar landing pages, microsites e formulários web personalizados, integrados com os dados do marketing cloud. * automation studio: permite criar automações de marketing para tarefas como extração de dados, importação de arquivos, segmentação e execução de scripts, funcionando como um motor de etl (extract, transform, load) dentro da plataforma. * contact builder: ferramenta para gerenciar o modelo de dados dos contatos no marketing cloud, definindo atributos, fontes de dados e relacionamentos entre diferentes conjuntos de dados. * analytics builder: fornece relatórios e dashboards para analisar o desempenho das campanhas de marketing e das jornadas de cliente. * content builder: repositório centralizado para criar, gerenciar e reutilizar conteúdo de marketing (imagens, blocos de texto, templates de email, etc.) em diferentes canais. * interaction studio (agora parte do marketing cloud personalization): permite a personalização em tempo real da experiência do cliente no site e em outros canais, com base no comportamento individual. * intelligence (anteriormente datorama): plataforma de inteligência de marketing que conecta e unifica dados de diversas fontes para fornecer insights e análises avançadas sobre o desempenho do marketing.   compreender a estrutura e as capacidades desses componentes é o primeiro passo para dominar o salesforce marketing cloud e utilizá-lo para impulsionar resultados de negócios significativos.     2. guia de aprendizado progressivo do marketing cloud esta seção oferece um guia progressivo e aprofundado para aprender o salesforce marketing cloud, começando pelos conceitos fundamentais e avançando para tópicos mais complexos. o objetivo é fornecer um caminho de aprendizado estruturado e prático. 2.1. nível iniciante: fundamentos e primeiros passos objetivo: familiarizar-se com a plataforma, seus componentes principais, terminologia e realizar tarefas básicas.   conceitos fundamentais essenciais:   * marketing cloud engagement: nome completo da plataforma, focada em engajamento do cliente. * contato (contact) / assinante (subscriber): o indivíduo. a chave é o subscriber key (ou contact key), um identificador único e imutável (não o endereço de email) que representa a pessoa em toda a plataforma. usar um id do crm (como o contact id do sales cloud) é uma prática recomendada. * data extension (de): tabelas para armazenar dados. pense nelas como planilhas ou tabelas de banco de dados. são a base para segmentação e personalização.    * tipos: standard (dados gerais), filtered (subconjunto de outra de), random (amostra aleatória).    * sendable vs. non-sendable: des sendable podem ser usadas para envios e devem ter um campo relacionado ao subscriber key. * list (lista - legado): método antigo, menos flexível que des. evite para novas implementações. * atributo (attribute): uma coluna em uma data extension ou um campo de perfil/preferência. * business unit (bu): uma subdivisão da conta para gerenciar acesso, dados e conteúdo separadamente (ex: por marca, país). a bu principal é chamada de parent bu ou enterprise bu, e as subdivisões são child bus. * studio: módulo focado em um canal (email studio, mobile studio, social studio, advertising studio). * builder: ferramenta para criar e gerenciar ativos ou processos (journey builder, content builder, contact builder, automation studio, analytics builder).   navegação na interface:   * login: acesse pelo url específico da sua instância (ex: mc.sx.exacttarget.com). * app switcher: ícone no canto superior esquerdo para navegar entre studios e builders. * seleção de bu: menu suspenso no canto superior direito para mudar de business unit. * setup: acesso via menu do seu usuário (canto superior direito) para configurações administrativas.   primeiros passos práticos:   1. criar uma data extension:      * vá para audience builder > contact builder.    * clique em data extensions.    * clique em create > standard data extension.    * defina properties (name: meus_primeiros_contatos, is sendable: yes).    * defina data retention (opcional).    * adicione fields (colunas): subscriberkey (text, primary key), emailaddress (emailaddress, nullable: no), firstname (text), status (text, default value: 'active').    * em send relationship, conecte subscriberkey a subscribers on subscriber key.    * clique em complete.   2. importar dados para a de:      * crie um arquivo csv simples com cabeçalhos correspondentes aos campos da de (subscriberkey, emailaddress, firstname, status).    * na de criada, vá para a aba records e clique em import.    * faça upload do csv, configure o delimitador e clique em next.    * mapeie as colunas do csv para os campos da de (map by header row).    * revise e clique em finish.   3. criar um email simples:      * vá para content builder.    * clique em create > email message.    * escolha template > basic > empty (ou um template existente).    * dê um nome ao email (ex: meu_primeiro_email).    * arraste blocos de conteúdo (image, text, button) para o corpo do email.    * adicione texto e imagens.    * use a personalização básica: olá %%firstname%%, no bloco de texto.    * defina um assunto (subject line).    * clique em done editing.   4. realizar um envio de teste:      * vá para email studio > email.    * clique em interactions > user-initiated emails.    * clique em create.    * dê um nome (ex: teste_primeiro_email).    * selecione o email criado (meu_primeiro_email).    * em select audience, escolha a de meus_primeiros_contatos.    * configure send options (sender profile, delivery profile).    * na aba review & send, marque a caixa de certificação.    * clique em send. (cuidado: isso envia para a de real. para testes, use uma de com seus próprios emails ou use a opção de test send dentro do content builder).   exercício prático: criação e importação de data extension   cenário: você precisa armazenar informações básicas de novos leads coletados em um evento. os dados incluem nome, sobrenome, email e empresa.   tarefa:   1. crie uma nova data extension (de) chamada event_leads com os campos apropriados. 2. prepare um arquivo csv de exemplo com alguns leads. 3. importe os dados do arquivo csv para a de event_leads usando a ferramenta de importação.   solução:   1. criação da data extension:   * navegue até audience builder > contact builder. * clique em data extensions no menu superior. * clique em create no canto superior direito. * selecione standard data extension e clique em ok. * properties:    * creation method: create from new    * name: event_leads    * external key: (deixe gerar automaticamente ou insira event_leads)    * description: \"leads coletados no evento xyz\"    * is sendable?: no (esta de é apenas para armazenamento inicial)    * is testable?: no * clique em next. * data retention policy: (deixe como off por enquanto, ou configure se necessário). * clique em next. * fields:    * adicione os seguintes campos:       * leadid (type: text, length: 50, primary key: yes, nullable: no)       * firstname (type: text, length: 100, nullable: yes)       * lastname (type: text, length: 100, nullable: yes)       * emailaddress (type: emailaddress, length: 254, nullable: no)       * companyname (type: text, length: 150, nullable: yes)       * eventdate (type: date, nullable: yes, default value: current date) * clique em complete.   2. preparação do arquivo csv:   * crie um arquivo chamado event_leads_import.csv com o seguinte conteúdo:   leadid,firstname,lastname,emailaddress,companyname   evt001,ana,silva,ana.silva@email.com,empresa a   evt002,bruno,costa,bruno.costa@email.com,empresa b   evt003,carla,mendes,carla.mendes@email.com,empresa c   3. importação dos dados:   * navegue até a de event_leads que você criou. * clique na aba records. * clique em import no canto superior direito. * upload file:    * clique em choose file e selecione event_leads_import.csv.    * delimiter: comma    * date format: (selecione o formato apropriado, ex: english (united states)) * clique em next. * configure mapping:    * selecione map by header row (se os nomes das colunas no csv corresponderem aos nomes dos campos na de).    * verifique se os campos estão mapeados corretamente. * clique em next. * review and import:    * verifique as configurações.    * insira seu endereço de email para receber notificação.    * import type: add and update (ou add only, se tiver certeza que não há duplicatas). * clique em finish. * aguarde a notificação por email ou verifique a aba records na de para confirmar a importação.   recursos para iniciantes:   * trailhead: módulo \"marketing cloud engagement basics\". * ajuda salesforce: documentação oficial sobre cada studio e builder. 2.2. nível intermediário: aprofundamento e aplicação objetivo: dominar as ferramentas principais, segmentar audiências com precisão, personalizar comunicações e criar automações e jornadas eficazes.   aprofundamento nas ferramentas:   * email studio & content builder:    * testes a/b: teste assuntos, remetentes, conteúdo, horários de envio. analise os resultados para otimizar.    * conteúdo dinâmico: crie blocos que mudam com base em atributos (ex: mostrar oferta diferente para clientes vip vs. não-vip).    * ampscript básico: use lookuprows() para buscar dados de outra de, if/else para lógica condicional, formatdate(), formatcurrency() para exibição.   %%[ var @firstname, @loyaltystatus        set @firstname = attributevalue(\"firstname\")        set @loyaltystatus = lookup(\"loyalty_data\",\"status\",\"subscriberkey\", _subscriberkey)        if empty(@firstname) then set @firstname = \"cliente\" endif ]%%   olá %%=v(@firstname)=%%,   %%[ if @loyaltystatus == \"gold\" then ]%%     <p>como cliente gold, aproveite 15% off!</p>   %%[ else ]%%     <p>confira nossas novidades!</p>   %%[ endif ]%%      * send log: configure para rastrear cada envio individualmente (útil para auditoria e relatórios personalizados). * contact builder & data designer:    * relacionamentos: crie links entre des (ex: de de clientes ligada à de de pedidos via customerid). use attribute groups para visualizar essas relações.    * synchronized data extensions: traga dados do sales/service cloud (contatos, leads, contas, objetos personalizados) para o marketing cloud para segmentação. * automation studio:    * sql query activity: use joins para combinar dados de múltiplas des, where para filtrar, group by para agregar.   /* seleciona clientes que compraram produto x nos últimos 30 dias */   select c.subscriberkey, c.emailaddress, c.firstname   from contact_salesforce c   join orders_salesforce o on c.id = o.contactid   join orderitems_salesforce oi on o.id = oi.orderid   join products_salesforce p on oi.productid = p.id   where p.productcode = 'prod-x'   and o.orderdate >= dateadd(day, -30, getdate())   and c.emailoptin = 1   /* target de: recent_productx_buyers (overwrite) */      * script activity (básico ssjs): manipule dados ou faça chamadas api simples.    * file transfer & import/export: automatize a troca de arquivos com sftp.    * estrutura: crie automações com múltiplos passos (import > sql > email send). * journey builder:    * splits: use decision splits (baseado em dados do contato, ex: segment == 'vip') e engagement splits (baseado em interação com email/push anterior, ex: abriu email 1?).    * metas e saídas: defina uma meta (ex: purchasemade == true) para medir o sucesso da jornada e permita que contatos saiam se atingirem a meta.    * update contact: modifique um atributo do contato durante a jornada (ex: marcar welcomejourneycompleted = true).   segmentação avançada na prática:   * rfm (recency, frequency, monetary): use sql para calcular scores rfm e segmentar clientes (ex: campeões, leais, em risco, perdidos). * segmentação comportamental: combine dados de cliques em email, visitas ao site (wma) e compras para criar segmentos como \"interessados em categoria y mas não compraram\" ou \"abandonaram carrinho\". * einstein segmentation: explore os segmentos preditivos criados pelo einstein (ex: probabilidade de abrir, clicar, converter, churn).   personalização efetiva:   * ampscript para conteúdo dinâmico: use lookuprows() e loops for para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos). * einstein content selection: deixe o einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento. * personalização cross-channel: use dados de um canal para informar outro (ex: se visitou página do produto x no site, envie email com mais detalhes sobre o produto x).   exercício prático: segmentação e personalização básica   cenário: usando a de event_leads do exercício anterior (agora populada), você quer enviar um email de acompanhamento personalizado para os leads da \"empresa b\". o email deve saudar o lead pelo primeiro nome.   tarefa:   1. crie uma nova data extension sendable chamada target_empresab_leads. 2. escreva uma consulta sql no automation studio para popular target_empresab_leads com os leads da \"empresa b\" da de event_leads. 3. crie um email simples no content builder que use ampscript básico para exibir o firstname.   solução:   1. criação da data extension sendable:   * siga os passos de criação de de do exercício 1, mas com as seguintes propriedades:    * name: target_empresab_leads    * is sendable?: yes    * send relationship: relacione emailaddress ao subscriber key (ou leadid se for usar como subscriber key). * fields:    * leadid (type: text, length: 50, primary key: yes)    * emailaddress (type: emailaddress, length: 254)    * firstname (type: text, length: 100)    * companyname (type: text, length: 150)   2. consulta sql no automation studio:   * navegue até journey builder > automation studio. * crie uma nova automação (ou adicione a uma existente). * arraste uma atividade sql query para o canvas. * clique em choose e depois em create new query activity. * properties:    * name: segment_leads_empresab    * external key: (gere automaticamente)    * description: \"segmenta leads do evento da empresa b\" * clique em next. * query:   select       leadid,       emailaddress,       firstname,       companyname   from       event_leads   where       companyname = 'empresa b'   * clique em validate syntax. * clique em next. * target data extension:    * selecione a de target_empresab_leads.    * data action: overwrite. * clique em next e finish. * salve a atividade e a automação. execute a automação para popular a de.   3. criação do email personalizado:   * navegue até content builder. * crie um novo email message. * use um template ou crie a partir do zero. * em um bloco de conteúdo html, adicione o seguinte:   olá %%=v(@firstname)=%%,   <br><br>   obrigado por visitar nosso stand no evento xyz!   <br><br>   gostaríamos de continuar a conversa sobre como a techgadgets pode ajudar a [nome da empresa do lead - opcional, requer mais ampscript ou campo na de de envio].   <br><br>   atenciosamente,   <br>   equipe techgadgets   * importante: para que %%=v(@firstname)=%% funcione, a variável @firstname precisa ser definida ou o campo firstname precisa existir na data extension de envio (target_empresab_leads). a forma mais simples é garantir que o nome da coluna na de de envio (firstname) corresponda ao nome usado na personalização. * alternativamente, você pode usar a string de personalização direta se o nome do campo na de for exatamente firstname:   olá %%firstname%%,   * salve o email.   recursos para nível intermediário:   * trailhead: projetos práticos sobre journey builder, automation studio, ampscript. * documentação salesforce: guias de ampscript, sql functions, ssjs. * comunidade: fóruns específicos sobre marketing cloud. 2.3. nível especialista: domínio técnico e estratégico objetivo: dominar aspectos técnicos avançados, implementar soluções complexas, integrações sofisticadas e liderar estratégias de marketing data-driven.   arquitetura de dados e governança:   * modelagem avançada: projetar modelos de dados escaláveis para grandes volumes, decidindo entre normalização e desnormalização. usar relacionamentos many-to-many efetivamente. * estratégia de subscriber key: definir e implementar uma estratégia robusta de chave única (geralmente id do crm) e gerenciar migrações se necessário. * governança: implementar políticas de retenção (data retention policies), arquivamento e auditoria de dados. * otimização de desempenho: usar indexação em des, otimizar sql (evitar select *, usar índices), gerenciar limites de automação.   scripting avançado:   * ampscript: dominar funções complexas (buildrowsetfromstring, executefilterorderedrows), criar bibliotecas de código reutilizáveis (code snippets), implementar tratamento de erros (raiseerror), otimizar performance. * server-side javascript (ssjs): usar core e platform functions, interagir com apis via wsproxy (mais eficiente que http calls diretos para a api soap), combinar ssjs e ampscript.   // exemplo ssjs com wsproxy para atualizar uma de   <script runat=server>   platform.load(\"core\",\"1\");   var prox = new script.util.wsproxy();   var apiobject = \"dataextensionobject\";   var action = \"update\";   var updateobject = {       customerkey: \"my_target_de\",       keys: [{ name: \"subscriberkey\", value: \"user123\" }],       properties: [           { name: \"status\", value: \"updated via ssjs\" },           { name: \"lastupdatesource\", value: \"ssjs_scriptactivity\" }       ]   };   var options = { saveoptions: [{'propertyname': '*', 'saveaction': 'updateadd'}] };   var result = prox.performitem(apiobject, updateobject, action, options);   write(stringify(result));   </script>   * sql avançado: usar window functions (row_number(), rank()), ctes (with), criar lógicas complexas em múltiplas etapas.   apis e integrações:   * rest & soap apis: dominar ambas, entendendo quando usar cada uma. implementar autenticação oauth 2.0 segura. gerenciar rate limits. usar apis para integrações em tempo real ou batch com sistemas externos (crms, e-commerce, cdps, data warehouses). * webhooks & event-driven: configurar o marketing cloud para enviar notificações (webhooks) para sistemas externos quando eventos ocorrem (ex: envio de email, clique) ou receber dados em tempo real.   estratégias multi-cloud e cross-cloud:   * marketing cloud connect: configurações avançadas, troubleshooting, otimização de sincronização. * integração com commerce cloud, experience cloud, tableau: criar experiências e análises unificadas. * customer data platform (cdp - antigo customer 360 audiences): usar cdp para unificar perfis, criar segmentos complexos e ativá-los no marketing cloud e outros canais.   desenvolvimento avançado:   * cloudpages: criar landing pages e microsites dinâmicos com ampscript/ssjs, formulários com validação avançada, progressive profiling. * custom activities (journey builder): desenvolver atividades personalizadas para conectar jornadas a qualquer sistema externo via api. * package manager: criar e implantar pacotes de configuração entre ambientes.   estratégias avançadas de marketing:   * personalização em tempo real: usar einstein (sto, content selection, recommendations) e interaction studio (agora parte do cdp) para personalização 1:1 no momento da interação. * orquestração omnichannel: projetar jornadas complexas que combinam email, sms, push, publicidade e interações no site/app de forma coesa. * modelagem de atribuição: usar datorama (marketing cloud intelligence) ou outras ferramentas para entender a contribuição de cada ponto de contato na jornada do cliente.   exercício prático: personalização avançada com ampscript lookup   cenário: você está enviando um email de carrinho abandonado. a data extension de envio (abandoned_cart_de) contém customerid e cartid. você precisa exibir os nomes e preços dos 3 primeiros produtos deixados no carrinho. as informações dos produtos do carrinho estão em outra de chamada cart_items_de (cartitemid [pk], cartid, productsku, productname, price, quantity).   tarefa: escreva o bloco de código ampscript para buscar e exibir os detalhes dos produtos do carrinho abandonado dentro do corpo do email.   solução:   %%[     var @cartid, @productrows, @rowcount, @i, @productname, @price     /* obtém o cartid da data extension de envio */     set @cartid = attributevalue(\"cartid\")      /* busca as linhas correspondentes na de de itens do carrinho */     /* ordena por um campo (ex: cartitemid ou um campo de data adicionado) para garantir consistência */     /* limita a 3 linhas */     set @productrows = lookuporderedrows(\"cart_items_de\", 3, \"cartitemid asc\", \"cartid\", @cartid)     set @rowcount = rowcount(@productrows)     if @rowcount > 0 then   ]%%     <p>você deixou alguns itens no seu carrinho:</p>     <table border=\"1\" cellpadding=\"5\" cellspacing=\"0\">       <tr>         <th>produto</th>         <th>preço</th>       </tr>       %%[         /* loop através das linhas encontradas (máximo 3) */         for @i = 1 to @rowcount do           var @row, @productname, @price           set @row = row(@productrows, @i)           set @productname = field(@row, \"productname\")           set @price = field(@row, \"price\")       ]%%       <tr>         <td>%%=v(@productname)=%%</td>         <td>r$ %%=formatnumber(@price, \"n2\", \"pt-br\")=%%</td>       </tr>       %%[ next @i ]%%      </table>     <br>     <a href=\"%%=redirectto(cloudpagesurl(your_cart_page_id, 'cartid', @cartid))=%%\">voltar para o carrinho</a>   %%[     else       /* mensagem opcional se nenhum item for encontrado, embora improvável para carrinho abandonado */       output(concat(\"<p>houve um problema ao recuperar os itens do seu carrinho.</p>\"))     endif   ]%%   explicação:   1. var ...: declara as variáveis necessárias. 2. set @cartid = attributevalue(\"cartid\"): obtém o cartid do assinante atual a partir da de de envio. 3. set @productrows = lookuporderedrows(\"cart_items_de\", 3, \"cartitemid asc\", \"cartid\", @cartid): esta é a função chave.    * lookuporderedrows: busca múltiplas linhas em uma de.    * \"cart_items_de\": nome da de onde estão os itens do carrinho.    * 3: número máximo de linhas a serem retornadas.    * \"cartitemid asc\": cláusula de ordenação (importante para pegar os 'primeiros' itens de forma consistente). você pode ordenar por outro campo relevante.    * \"cartid\": nome da coluna na cart_items_de para fazer a correspondência.    * @cartid: valor a ser correspondido (o id do carrinho do assinante atual). 4. set @rowcount = rowcount(@productrows): conta quantas linhas foram retornadas pela busca. 5. if @rowcount > 0 then ... endif: verifica se algum produto foi encontrado. 6. for @i = 1 to @rowcount do ... next @i: inicia um loop para iterar sobre cada linha de produto encontrada (até o máximo de 3). 7. set @row = row(@productrows, @i): obtém a linha atual dentro do loop. 8. set @productname = field(@row, \"productname\"): extrai o valor do campo productname da linha atual. 9. set @price = field(@row, \"price\"): extrai o valor do campo price. 10. <td>%%=v(@productname)=%%</td>: exibe o nome do produto. 11. <td>r$ %%=formatnumber(@price, \"n2\", \"pt-br\")=%%</td>: exibe o preço formatado como moeda brasileira. 12. redirectto(cloudpagesurl(your_cart_page_id, 'cartid', @cartid)): cria um link seguro e rastreável para a página do carrinho, passando o cartid como parâmetro (substitua your_cart_page_id pelo id real da sua cloudpage do carrinho).   recursos para nível especialista:   * certificações: marketing cloud developer, consultant, architect. * documentação de desenvolvedor: guias de api, sdks. * comunidade: contribuir, responder perguntas, participar de grupos de desenvolvedores. * salesforce releases: acompanhar de perto as novas funcionalidades lançadas 3x por ano.     3. aprofundamento: email specialist esta seção aprofunda os conhecimentos e habilidades essenciais para um profissional que atua como email specialist no salesforce marketing cloud. o foco está na aplicação prática das ferramentas e conceitos para criar, gerenciar e otimizar campanhas de email marketing eficazes. 3.1. conteúdo teórico e melhores práticas 3.1.1. práticas de email marketing dominar as melhores práticas de email marketing é fundamental para garantir que suas mensagens cheguem à caixa de entrada, sejam abertas, lidas e gerem os resultados esperados, ao mesmo tempo em que se mantém a conformidade legal e a boa reputação do remetente.   conformidade legal e regulamentações:   * can-spam act (eua): entender os requisitos principais, como identificação clara do remetente, endereço físico válido, mecanismo de opt-out claro e funcional, e proibição de cabeçalhos e assuntos enganosos. * gdpr (regulamento geral sobre a proteção de dados - ue): compreender os princípios de consentimento explícito (opt-in), direito ao esquecimento, portabilidade de dados e a necessidade de uma base legal para processar dados pessoais de cidadãos da ue. * lgpd (lei geral de proteção de dados - brasil): similar ao gdpr, exige consentimento, transparência no uso de dados, direitos dos titulares (acesso, correção, exclusão) e medidas de segurança. * casl (canada's anti-spam legislation): foco no consentimento (expresso ou implícito) para envio de mensagens comerciais eletrônicas (cems) para canadenses. * políticas de provedores de email (isps): entender as políticas de provedores como gmail, outlook, yahoo, que impactam a entregabilidade (ex: limites de envio, reputação do remetente).   gestão de consentimento (opt-in, opt-out):   * opt-in: processo pelo qual um usuário concorda explicitamente em receber emails.    * single opt-in: o usuário se inscreve e é adicionado à lista imediatamente.    * double opt-in (recomendado): o usuário se inscreve e recebe um email de confirmação com um link para clicar e validar a inscrição. isso garante maior qualidade da lista e melhor entregabilidade. * opt-out (unsubscribe): obrigatório por lei, deve ser um processo claro, fácil e rápido para o usuário cancelar a inscrição. o marketing cloud oferece mecanismos automatizados para gerenciar opt-outs. * centro de preferências: oferecer aos usuários a opção de gerenciar suas preferências de comunicação (frequência, tipos de conteúdo) em vez de apenas cancelar tudo, ajudando a reter assinantes.   reputação do remetente:   * ip e domínio: a reputação está associada tanto ao endereço ip de envio quanto ao domínio do remetente. manter uma boa reputação é crucial para a entregabilidade. * fatores que afetam a reputação: taxas de abertura, cliques, bounces (hard e soft), reclamações de spam, armadilhas de spam (spam traps), volume e frequência de envio, qualidade da lista, autenticação de email. * monitoramento: utilizar ferramentas de monitoramento de reputação (internas do marketing cloud ou externas como senderscore, google postmaster tools) para acompanhar a saúde do remetente. * aquecimento de ip (ip warming): processo gradual de aumento do volume de envio para um novo ip ou um ip com reputação baixa, para construir confiança com os isps.   segmentação e personalização:   * importância: enviar conteúdo relevante para o público certo aumenta o engajamento e reduz as chances de cancelamentos e reclamações de spam. * critérios de segmentação: utilizar dados demográficos, histórico de compras, comportamento no site, engajamento com emails anteriores, preferências declaradas, etc. * ferramentas no marketing cloud: data extensions, filtros de dados, grupos, medidas, sql queries (no automation studio) para criar segmentos dinâmicos e estáticos. * personalização: usar dados do assinante para personalizar o conteúdo do email (nome, cidade, produtos visualizados, etc.) usando ampscript, blocos de conteúdo dinâmico e personalização do einstein.   teste a/b:   * objetivo: testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante. * processo: definir a hipótese, criar as variações, selecionar o tamanho da amostra, definir o critério de vitória (aberturas, cliques, conversões), executar o teste e analisar os resultados. * ferramenta no email studio: o email studio possui uma funcionalidade nativa para configurar e executar testes a/b. 3.1.2. design de mensagens criar emails visualmente atraentes, responsivos e eficazes é crucial para capturar a atenção do assinante e incentivá-lo a agir. o marketing cloud oferece ferramentas robustas para o design e construção de emails.   content builder:   * interface: é o editor principal e repositório de conteúdo no marketing cloud. utiliza uma interface de arrastar e soltar (drag-and-drop) para facilitar a construção de emails. * tipos de conteúdo: permite criar e gerenciar diversos tipos de conteúdo reutilizável:    * blocos de conteúdo: pedaços individuais de conteúdo (texto, imagem, botão, html personalizado, conteúdo dinâmico, conteúdo do einstein).    * templates: estruturas de email pré-definidas (com cabeçalho, rodapé, layouts de coluna) que podem ser usadas como base para novos emails. podem conter áreas editáveis e bloqueadas.    * emails: mensagens completas construídas a partir de templates e/ou blocos de conteúdo.    * uploads: imagens, documentos e outros arquivos. * organização: permite organizar o conteúdo em pastas para facilitar o gerenciamento.   layouts e templates:   * templates prontos: o marketing cloud oferece uma variedade de templates básicos e temáticos prontos para usar. * criação de templates personalizados: é possível criar templates do zero usando html/css ou modificar templates existentes. a criação de templates reutilizáveis garante consistência visual e economiza tempo. * layouts responsivos: fundamental garantir que os emails sejam exibidos corretamente em diferentes tamanhos de tela (desktops, tablets, smartphones). os templates e blocos do content builder são geralmente responsivos por padrão, mas testes são essenciais. * estrutura (html): compreender a estrutura básica de html para emails (tabelas para layout ainda são comuns devido à compatibilidade entre clientes de email) é útil para personalizações avançadas e solução de problemas.   design responsivo:   * media queries (css): utilizadas para aplicar estilos diferentes com base no tamanho da tela do dispositivo. * fluid layouts: usar porcentagens em vez de pixels fixos para larguras, permitindo que o layout se ajuste. * imagens flexíveis: garantir que as imagens redimensionem proporcionalmente. * testes: testar exaustivamente em diferentes clientes de email (gmail, outlook, apple mail, etc.) e dispositivos (ios, android) usando ferramentas de pré-visualização e teste (como as integradas ao marketing cloud ou serviços externos como litmus ou email on acid).   elementos de design:   * cabeçalho (header): geralmente contém o logo da marca e links importantes. * corpo (body): o conteúdo principal da mensagem. * call-to-action (cta): botões ou links claros e concisos que incentivam o usuário a realizar uma ação específica (ex: \"compre agora\", \"saiba mais\"). devem ser visualmente destacados. * rodapé (footer): obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais. * imagens: usar imagens relevantes e otimizadas para web (tamanho do arquivo). sempre incluir texto alternativo (alt text) para acessibilidade e caso as imagens não carreguem. * tipografia: escolher fontes legíveis e consistentes com a marca. usar fontes seguras para web (web-safe fonts) ou especificar fontes de fallback.   personalização e conteúdo dinâmico:   * ampscript: linguagem de script proprietária da salesforce para incorporar lógica de personalização avançada, conteúdo dinâmico e manipulação de dados diretamente no email. * blocos de conteúdo dinâmico: permitem exibir diferentes versões de um bloco de conteúdo com base em regras definidas a partir dos atributos ou dados do assinante. ex: mostrar uma oferta diferente para clientes vip. * personalização do einstein: utiliza ia para recomendar produtos ou selecionar conteúdo relevante para cada assinante individualmente. * strings de personalização (substitution strings): forma simples de inserir dados do assinante no email (ex: %%firstname%%).   pré-visualização e teste:   * pré-visualização no content builder: permite ver como o email será renderizado para assinantes específicos, substituindo dados de personalização. * teste de renderização (client rendering): usar ferramentas integradas ou externas para ver como o email aparece em dezenas de clientes de email e dispositivos diferentes. * envio de teste: enviar versões de teste do email para endereços específicos antes do envio final para a lista. 3.1.3. gerenciamento de assinantes e dados o gerenciamento eficaz de assinantes e seus dados é fundamental para o sucesso das campanhas de email marketing. no marketing cloud, isso envolve a compreensão de como os dados são estruturados, armazenados, importados, exportados e utilizados.   modelo de dados no marketing cloud:   * data extensions (extensões de dados): são tabelas relacionais semelhantes às de um banco de dados sql, que armazenam dados de assinantes e outras informações relevantes. são o principal método de armazenamento de dados no marketing cloud.    * tipos: standard (padrão), sendable (enviável), filtered (filtrada), random (aleatória), etc.    * campos: podem conter diversos tipos de dados (texto, número, data, booleano, etc.) e ter chaves primárias.    * relacionamentos: podem ser relacionadas entre si através de chaves, permitindo a criação de modelos de dados complexos. * lists (listas): método tradicional (legado) de armazenamento de assinantes. mais limitadas que as data extensions, mas ainda utilizadas em alguns contextos. * subscribers (assinantes): entidade central que representa um indivíduo que pode receber comunicações. cada assinante tem um registro na all subscribers list (lista de todos os assinantes). * contact builder: ferramenta para visualizar e gerenciar o modelo de dados, definindo relacionamentos entre diferentes data extensions e outras fontes de dados.   importação e exportação de dados:   * import wizard (assistente de importação): interface gráfica para importar dados de arquivos csv, txt ou zip para data extensions ou lists. * file transfer (transferência de arquivos): permite fazer upload de arquivos para o enhanced ftp do marketing cloud para posterior importação. * automation studio: permite automatizar a importação de dados através de atividades como file transfers, import files e sql queries. * api: utilizar as apis rest e soap do marketing cloud para integrar dados de sistemas externos. * exportação: extrair dados de data extensions para arquivos ou sistemas externos através de data extracts no automation studio ou via api.   segmentação de assinantes:   * filters (filtros): criar subconjuntos de data extensions com base em critérios específicos. * sql queries: usar consultas sql para segmentar assinantes com base em critérios complexos, combinando dados de múltiplas data extensions. * audience builder: ferramenta para criar segmentos de público-alvo usando uma interface visual. * journey builder: segmentar assinantes com base em comportamentos e eventos em tempo real.   gestão de preferências e consentimento:   * preference center (centro de preferências): página web onde os assinantes podem gerenciar suas preferências de comunicação (tipos de email, frequência, etc.). * subscription center (centro de assinatura): página padrão do marketing cloud para gerenciar assinaturas, acessada através do link de cancelamento nos emails. * profile center (centro de perfil): página onde os assinantes podem atualizar suas informações pessoais. * campos de consentimento: armazenar e rastrear o consentimento do assinante (quando, como e para quê foi dado) em campos específicos nas data extensions.   limpeza e manutenção de dados:   * deduplicate (deduplicação): identificar e remover registros duplicados para manter a integridade dos dados. * data validation (validação de dados): garantir que os dados importados atendam aos critérios de qualidade (formato correto, valores válidos, etc.). * automação de manutenção: criar automações para limpar regularmente dados antigos ou inválidos. * bounce management (gestão de bounces): processar e gerenciar emails que retornam (hard bounces, soft bounces) para manter a lista saudável.   privacidade e segurança de dados:   * encryption (criptografia): utilizar criptografia para proteger dados sensíveis. * field-level security (segurança em nível de campo): restringir o acesso a campos específicos com base nas permissões do usuário. * data retention (retenção de dados): definir políticas de retenção de dados em conformidade com regulamentações como gdpr e lgpd. * audit trail (trilha de auditoria): rastrear quem acessou ou modificou dados e quando.   integrações de dados:   * marketing cloud connect: integração nativa com o sales cloud e service cloud, permitindo usar dados do crm em campanhas de email. * synchronized data extensions: data extensions que sincronizam automaticamente dados do sales cloud ou service cloud. * api integrations: usar as apis do marketing cloud para integrar com sistemas externos (crm, e-commerce, etc.). * third-party connectors (conectores de terceiros): utilizar conectores pré-construídos para integrar com plataformas populares. 3.1.4. entregabilidade (inbox delivery) entregabilidade refere-se à capacidade de seus emails chegarem à caixa de entrada do destinatário, em vez de serem bloqueados, direcionados para a pasta de spam ou sofrerem outros problemas de entrega. é um aspecto crítico do email marketing, pois emails que não chegam à caixa de entrada não geram resultados.   fatores chave que influenciam a entregabilidade:   * reputação do remetente (ip e domínio): como discutido anteriormente, a reputação construída com os isps é o fator mais importante. envios consistentes, baixo volume de reclamações e bounces, e bom engajamento ajudam a construir uma boa reputação. * qualidade da lista: enviar para listas compradas, antigas ou com muitos endereços inválidos prejudica gravemente a reputação e a entregabilidade. focar em listas opt-in (preferencialmente double opt-in) é essencial. * conteúdo do email: certos tipos de conteúdo podem acionar filtros de spam (excesso de letras maiúsculas, palavras \"spammy\" como \"grátis\", \"promoção imperdível\", links suspeitos, desequilíbrio entre imagem e texto). * volume e frequência de envio: picos repentinos no volume de envio ou envio excessivamente frequente podem ser vistos como suspeitos pelos isps. * engajamento do assinante: isps monitoram se os destinatários abrem, clicam, marcam como importantes ou movem emails para a caixa de entrada. alto engajamento sinaliza que os emails são desejados. * autenticação de email: configurar corretamente spf, dkim e dmarc é crucial para provar aos isps que você é quem diz ser e que seus emails não foram falsificados.   autenticação de email (spf, dkim, dmarc):   * spf (sender policy framework): registro dns que lista os servidores de email autorizados a enviar emails em nome do seu domínio. ajuda a prevenir spoofing. * dkim (domainkeys identified mail): adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho. * dmarc (domain-based message authentication, reporting, and conformance): política dns que informa aos isps o que fazer com emails que falham nas verificações spf ou dkim (rejeitar, colocar em quarentena ou apenas monitorar). também fornece relatórios sobre a autenticação. * configuração no marketing cloud: o marketing cloud auxilia na configuração desses protocolos através do sender authentication package (sap) ou gerenciamento de private domains.   monitoramento e análise:   * taxas de abertura e cliques: indicadores de engajamento. quedas podem sinalizar problemas de entregabilidade ou relevância. * taxa de bounce (devolução):    * hard bounce: endereço inválido ou inexistente. deve ser removido imediatamente da lista.    * soft bounce: problema temporário (caixa cheia, servidor indisponível). o marketing cloud geralmente tenta reenviar algumas vezes. * taxa de reclamação de spam: percentual de destinatários que marcaram seu email como spam. deve ser mantida extremamente baixa (idealmente abaixo de 0.1%). * taxa de cancelamento (unsubscribe rate): indicador de relevância e satisfação. picos podem indicar problemas com conteúdo ou frequência. * ferramentas de monitoramento: usar o tracking do email studio, relatórios do marketing cloud, google postmaster tools, microsoft snds e ferramentas de terceiros para acompanhar métricas de entregabilidade e reputação.   melhores práticas para melhorar a entregabilidade:   * construa listas organicamente: use formulários de opt-in claros, preferencialmente double opt-in. * mantenha a lista limpa: remova hard bounces, endereços inativos e trate soft bounces. * segmente e personalize: envie conteúdo relevante para aumentar o engajamento. * autentique seus envios: configure spf, dkim e dmarc corretamente. * monitore sua reputação: acompanhe as métricas e use ferramentas de monitoramento. * aqueça novos ips: siga um plano de aquecimento gradual. * gerencie a frequência: não envie emails em excesso. * facilite o opt-out: torne o processo de cancelamento simples e rápido. * evite conteúdo suspeito: cuidado com palavras e práticas que acionam filtros de spam. 3.1.5. automação de marketing (email studio, journey builder, triggered emails) a automação é um pilar do email marketing moderno, permitindo enviar mensagens relevantes e oportunas em escala, com base em gatilhos, comportamentos ou cronogramas definidos.   automation studio:   * propósito: ferramenta de etl (extract, transform, load) e automação de processos dentro do marketing cloud. ideal para tarefas recorrentes e baseadas em dados. * principais atividades:    * schedule: inicia a automação em um horário específico ou recorrente.    * file drop: inicia a automação quando um arquivo é colocado no ftp.    * sql query: executa consultas sql para segmentar dados.    * import file: importa dados de arquivos no ftp para data extensions.    * file transfer: move arquivos de/para o ftp.    * data extract: extrai dados do marketing cloud para arquivos.    * send email: envia um email para uma audiência definida por uma data extension.    * script: executa ampscript ou ssjs para lógica personalizada. * casos de uso: importação diária de dados, segmentação complexa recorrente, limpeza de dados, envios de email em lote agendados.   journey builder:   * propósito: orquestrar jornadas de cliente 1:1 e cross-channel, reagindo a eventos e comportamentos em tempo real ou próximo a isso. * fontes de entrada (entry sources):    * data extension: adiciona contatos quando são adicionados ou atualizados em uma de.    * api event: adiciona contatos via chamada de api externa (ex: após uma compra no site).    * cloudpages form submit: adiciona contatos após preencherem um formulário em uma cloudpage.    * salesforce data: adiciona contatos com base em eventos no sales/service cloud (ex: criação de lead, fechamento de caso). * atividades:    * messages: send email, send sms, send push notification, send in-app message.    * flow control: wait (por duração, até data, por atributo), decision split (baseado em dados), engagement split (baseado em interação), random split.    * customer updates: update contact (atualiza dados na de da jornada).    * sales & service cloud: create/update lead, create/update contact, create task, create/update case (requer mc connect). * casos de uso: jornadas de boas-vindas, recuperação de carrinho abandonado, campanhas de reengajamento, fluxos pós-compra, nutrição de leads, renovação de assinatura.   triggered emails (envios acionados):   * propósito: enviar emails individuais em resposta a uma ação específica do cliente, geralmente em tempo real, via api. * configuração: criar uma \"triggered send definition\" no email studio, associando um email a uma data extension (opcional, para dados adicionais) e a uma chave externa. * acionamento: uma chamada de api (rest ou soap) é feita para a chave externa da definição, passando o endereço de email do destinatário e quaisquer dados de personalização necessários. * casos de uso: confirmação de pedido, redefinição de senha, notificação de envio, alerta de conta, confirmação de inscrição (single opt-in). * diferença do journey builder: triggered emails são para envios transacionais ou acionados por api mais simples e diretos. journey builder é para orquestrar sequências mais complexas e multi-etapas.   escolhendo a ferramenta certa:   * automation studio: para processos baseados em dados, agendados ou em lote (importações, segmentações complexas, envios em massa agendados). * journey builder: para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões). * triggered emails (api): para envios individuais, em tempo real, acionados por sistemas externos (confirmações, notificações). 3.1.6. rastreamento e relatórios medir o desempenho das campanhas de email é essencial para entender o que funciona, otimizar estratégias e demonstrar o valor do email marketing.   métricas chave de email marketing:   * sent (enviados): número total de emails enviados. * delivered (entregues): número de emails que chegaram ao servidor do destinatário (enviados - bounces). * delivery rate (taxa de entrega): (entregues / enviados) * 100. indica a saúde da lista e a reputação do remetente. * bounces (devoluções): emails que não puderam ser entregues.    * hard bounce rate: (hard bounces / enviados) * 100. indica endereços inválidos.    * soft bounce rate: (soft bounces / enviados) * 100. indica problemas temporários. * opens (aberturas): número de vezes que o email foi aberto (rastreado por um pixel invisível). * open rate (taxa de abertura): (aberturas totais / entregues) * 100. * unique opens (aberturas únicas): número de destinatários únicos que abriram o email. * unique open rate (taxa de abertura única): (aberturas únicas / entregues) * 100. métrica mais comum para avaliar o interesse no assunto/remetente. * clicks (cliques): número total de cliques em links dentro do email. * click-through rate (ctr - taxa de cliques): (cliques totais / entregues) * 100. mede o engajamento com o conteúdo. * unique clicks (cliques únicos): número de destinatários únicos que clicaram em um link. * unique click-through rate (unique ctr): (cliques únicos / entregues) * 100. * click-to-open rate (ctor): (cliques únicos / aberturas únicas) * 100. mede a relevância do conteúdo para quem abriu o email. * unsubscribes (cancelamentos): número de destinatários que cancelaram a inscrição. * unsubscribe rate (taxa de cancelamento): (cancelamentos / entregues) * 100. * spam complaints (reclamações de spam): número de destinatários que marcaram o email como spam. * complaint rate (taxa de reclamação): (reclamações / entregues) * 100. deve ser mantida muito baixa. * conversion rate (taxa de conversão): (número de conversões / entregues) * 100. mede a ação final desejada (compra, download, etc.). requer rastreamento adicional (ex: parâmetros utm e google analytics). * revenue per email (receita por email): receita total gerada / número de emails entregues.   ferramentas de rastreamento no marketing cloud:   * tracking pixel: pixel invisível adicionado automaticamente aos emails html para rastrear aberturas. * link wrapping: o marketing cloud reescreve os links nos emails para direcioná-los através de seus servidores de rastreamento antes de redirecionar para o destino final, permitindo rastrear cliques. * web analytics connector (parâmetros utm): adiciona automaticamente parâmetros utm (ou outros) aos links dos emails para rastrear o tráfego e as conversões em ferramentas de análise web como o google analytics. * send logging: data extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.   relatórios no marketing cloud:   * email studio tracking: interface principal para visualizar o desempenho de envios individuais, testes a/b e envios acionados. * analytics builder / reports: oferece uma variedade de relatórios padrão sobre desempenho de email, automações, jornadas, contatos, etc.    * email send performance: desempenho geral de envios em um período.    * journey performance: desempenho de jornadas ativas.    * automation performance: status e histórico de execuções de automações.    * contact counts: número de contatos na conta. * discover reporting tool (add-on): ferramenta mais avançada (geralmente paga) para criar relatórios personalizados e dashboards interativos. * datorama / marketing cloud intelligence (add-on): plataforma de inteligência de marketing para conectar dados de múltiplas fontes (incluindo marketing cloud) e criar visualizações e análises avançadas. * sql queries em data views: consultar data views do sistema (ex: _open, _click, _sent, _bounce, _subscribers) usando sql no automation studio para criar relatórios personalizados em data extensions.   análise e otimização:   * comparar desempenho: analisar o desempenho ao longo do tempo, comparar diferentes campanhas, segmentos e testes a/b. * identificar tendências: procurar padrões em taxas de abertura, cliques, cancelamentos, etc. * segmentar resultados: analisar o desempenho por segmento de público, dispositivo, cliente de email. * tomar ações: usar os insights dos relatórios para otimizar assuntos, conteúdo, ctas, segmentação, frequência, horário de envio e estratégias gerais. 3.1.7. integrações externas (relacionadas a email) integrar o marketing cloud com outros sistemas é crucial para obter uma visão unificada do cliente e automatizar processos de marketing de forma mais eficaz.   marketing cloud connect (integração com sales/service cloud):   * propósito: conector nativo e bidirecional entre marketing cloud e sales cloud/service cloud. * funcionalidades chave:    * sincronização de dados: usar synchronized data extensions para trazer dados de objetos padrão e personalizados do crm para o marketing cloud.    * envios do crm: iniciar envios de email do marketing cloud diretamente das interfaces do sales/service cloud (para leads, contatos, campanhas).    * rastreamento no crm: enviar dados de rastreamento de email (aberturas, cliques, bounces) de volta para os registros de lead/contato no crm.    * atividades de jornada: usar dados e eventos do crm como gatilhos ou critérios de decisão em jornadas, e criar/atualizar registros no crm a partir de uma jornada. * configuração: requer instalação de um pacote gerenciado no crm e configuração em ambos os clouds, incluindo mapeamento de usuários.   integração com e-commerce:   * objetivo: trazer dados de comportamento e transações do e-commerce (visualizações de produtos, itens adicionados ao carrinho, compras, abandono de carrinho) para o marketing cloud para acionar emails e personalizar conteúdo. * métodos:    * api: usar as apis rest/soap do marketing cloud para enviar dados do e-commerce em tempo real ou em lote.    * arquivos (batch): exportar dados do e-commerce para arquivos csv e importá-los via ftp/automation studio.    * conectores de terceiros: utilizar conectores específicos para plataformas de e-commerce populares (shopify, magento, etc.).    * collect tracking code (web & mobile analytics - wma): implementar o código de rastreamento do marketing cloud no site para capturar comportamento de navegação. * casos de uso: emails de carrinho abandonado, recomendações de produtos baseadas no histórico, emails pós-compra, segmentação por histórico de compras.   integração com web analytics (ex: google analytics):   * objetivo: rastrear o tráfego e as conversões geradas pelos emails no site. * método: usar o web analytics connector no marketing cloud para adicionar automaticamente parâmetros utm (ou outros) aos links dos emails. * análise: analisar os dados no google analytics (ou outra ferramenta) para entender quais campanhas de email geram mais tráfego, engajamento no site e conversões.   integração com customer data platforms (cdp):   * objetivo: usar segmentos e perfis unificados criados no cdp para direcionar campanhas no marketing cloud. * métodos:    * salesforce cdp: integração nativa para ativar segmentos do cdp diretamente no journey builder ou via data extensions.    * cdps de terceiros: geralmente via api ou exportação/importação de arquivos.   outras integrações via api:   * crms externos: sincronizar dados de clientes e acionar envios. * sistemas de eventos: acionar emails transacionais (ex: confirmação de reserva) via api. * ferramentas de bi/data warehouse: exportar dados de desempenho do marketing cloud para análise centralizada.   dominar as diferentes formas de integração permite ao email specialist alavancar dados de toda a organização para criar campanhas de email mais inteligentes, personalizadas e eficazes.     3.2. exercícios práticos - email specialist (conteúdo de exercicios_email_specialist.md) exercícios práticos: email specialist esta seção contém exercícios práticos para aplicar os conhecimentos relacionados às tarefas de um email specialist no salesforce marketing cloud. cada exercício apresenta um cenário e uma solução detalhada. exercício 1: segmentação com sql query cenário: uma empresa de varejo online, \"techgadgets\", deseja enviar um email promocional sobre fones de ouvido bluetooth para clientes que:   1. compraram um smartphone nos últimos 6 meses. 2. não compraram fones de ouvido bluetooth nos últimos 12 meses. 3. estão inscritos para receber emails promocionais.   você tem as seguintes data extensions (des):   * customers: contém informações dos clientes (customerid [pk], emailaddress, firstname, issubscribed [boolean]). * orders: contém informações dos pedidos (orderid [pk], customerid, orderdate, totalamount). * orderitems: contém detalhes dos itens de cada pedido (orderitemid [pk], orderid, productsku, productname, quantity, price). * products: contém informações dos produtos (productsku [pk], productname, category).   tarefa: escreva uma consulta sql no automation studio para criar uma data extension alvo (target_headphone_promo) contendo customerid, emailaddress e firstname dos clientes que atendem aos critérios.   solução:   select       c.customerid,       c.emailaddress,       c.firstname   from       customers c   where       c.issubscribed = 1       and c.customerid in (           -- clientes que compraram smartphone nos últimos 6 meses           select distinct o.customerid           from orders o           join orderitems oi on o.orderid = oi.orderid           join products p on oi.productsku = p.productsku           where p.category = 'smartphones'           and o.orderdate >= dateadd(month, -6, getdate())       )       and c.customerid not in (           -- clientes que compraram fones bluetooth nos últimos 12 meses           select distinct o.customerid           from orders o           join orderitems oi on o.orderid = oi.orderid           join products p on oi.productsku = p.productsku           where p.productname like '%bluetooth headphone%'           and o.orderdate >= dateadd(month, -12, getdate())       )   /* target de: target_headphone_promo (overwrite) */   explicação:   1. select c.customerid, c.emailaddress, c.firstname from customers c: seleciona os campos desejados da de customers. 2. where c.issubscribed = 1: filtra apenas os clientes que estão inscritos. 3. and c.customerid in (...): garante que o cliente esteja no grupo que comprou um smartphone recentemente.    * a subconsulta interna junta orders, orderitems e products para encontrar clientes (customerid) que fizeram pedidos (orders) contendo itens (orderitems) da categoria 'smartphones' (products) nos últimos 6 meses (o.orderdate >= dateadd(month, -6, getdate())). 4. and c.customerid not in (...): garante que o cliente não esteja no grupo que comprou fones de ouvido bluetooth recentemente.    * a subconsulta interna similar à anterior, mas busca por produtos cujo nome contenha 'bluetooth headphone' (p.productname like '%bluetooth headphone%') nos últimos 12 meses (o.orderdate >= dateadd(month, -12, getdate())). 5. data extension alvo (target_headphone_promo): deve ser criada com os campos customerid (primary key), emailaddress (emailaddress type), firstname (text) e configurada como sendable, relacionando customerid ao subscriber key.     exercício 2: conteúdo dinâmico com ampscript cenário: a techgadgets quer personalizar o cabeçalho de seu email de newsletter semanal. eles têm um campo na data extension de envio chamado loyaltytier ('bronze', 'silver', 'gold').   * clientes 'gold' devem ver: \"ofertas exclusivas para membros gold!\" * clientes 'silver' devem ver: \"novidades e ofertas especiais para você!\" * clientes 'bronze' (e qualquer outro valor ou nulo) devem ver: \"confira as novidades da semana!\"   tarefa: escreva o bloco de código ampscript para exibir o cabeçalho dinâmico dentro de um bloco de conteúdo html no content builder.   solução:   %%[     var @loyaltytier, @headertext     set @loyaltytier = attributevalue(\"loyaltytier\") /* ou o nome exato do campo na de de envio */     if @loyaltytier == \"gold\" then       set @headertext = \"ofertas exclusivas para membros gold!\"     elseif @loyaltytier == \"silver\" then       set @headertext = \"novidades e ofertas especiais para você!\"     else       set @headertext = \"confira as novidades da semana!\"     endif   ]%%   <h1>%%=v(@headertext)=%%</h1>   explicação:   1. %%[ ... ]%%: delimita o bloco de código ampscript. 2. var @loyaltytier, @headertext: declara as variáveis que serão usadas. 3. set @loyaltytier = attributevalue(\"loyaltytier\"): obtém o valor do campo loyaltytier da data extension de envio para o assinante atual. certifique-se de que o nome do campo (\"loyaltytier\") corresponde exatamente ao nome na de. 4. if @loyaltytier == \"gold\" then ... elseif @loyaltytier == \"silver\" then ... else ... endif: estrutura condicional que verifica o valor de @loyaltytier. 5. set @headertext = \"...\": define o texto da variável @headertext com base no nível de fidelidade. 6. <h1>%%=v(@headertext)=%%</h1>: fora do bloco ampscript, exibe o valor da variável @headertext dentro de uma tag <h1>. %%=v(...)=%% é a sintaxe abreviada para imprimir o valor de uma variável.     exercício 3: teste a/b de linha de assunto cenário: a equipe de marketing da techgadgets quer testar duas linhas de assunto para um email promocional de um novo smartwatch para determinar qual gera a maior taxa de abertura única (unique open rate).   * assunto a: \"novo smartwatch x: monitore sua saúde com estilo!\" * assunto b: \"oferta de lançamento: smartwatch x com 15% off por tempo limitado!\"   eles querem enviar o teste para 20% da audiência (10% para cada assunto) e, após 4 horas, enviar automaticamente a versão vencedora (baseada na maior taxa de abertura única) para os 80% restantes.   tarefa: descreva os passos para configurar este teste a/b no email studio usando o send flow.   solução:   1. preparar o email: crie o email promocional no content builder. o conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará. 2. iniciar o envio: no email studio, selecione o email criado e inicie o processo de envio (send flow). 3. definir propriedades:    * assunto: deixe o assunto padrão do email (ele será sobrescrito no teste a/b).    * send classification: selecione a classificação de envio apropriada (comercial).    * sender profile & delivery profile: selecione os perfis adequados. 4. selecionar audiência: escolha a data extension ou lista que contém a audiência alvo para o email. 5. configurar teste a/b:    * na etapa de configuração do envio (geralmente \"configure delivery\" ou similar), localize e habilite a opção de teste a/b.    * tipo de teste: selecione \"subject line\" (linha de assunto).    * condição de teste a: insira o assunto a: \"novo smartwatch x: monitore sua saúde com estilo!\"    * condição de teste b: insira o assunto b: \"oferta de lançamento: smartwatch x com 15% off por tempo limitado!\"    * tamanho da amostra: defina o tamanho total da amostra de teste como 20%. o sistema dividirá automaticamente em 10% para a e 10% para b.    * critério de vencedor: selecione \"highest unique open rate\" (maior taxa de abertura única).    * duração do teste: defina a duração como 4 horas.    * envio automático para remanescentes: certifique-se de que a opção para enviar automaticamente a versão vencedora para os 80% restantes após o teste esteja marcada. 6. agendar ou enviar: agende o envio para a data/hora desejada ou envie imediatamente. 7. monitorar: após o envio, monitore o progresso do teste a/b na seção de tracking do email studio. após 4 horas, o sistema determinará o vencedor e iniciará o envio para o restante da audiência.   explicação: o send flow do email studio guia o usuário através da configuração do teste a/b. os pontos chave são selecionar o tipo de teste (subject line), definir as variações (assuntos a e b), configurar o tamanho da amostra e a duração, escolher o critério de vencedor (unique open rate) e habilitar o envio automático para os destinatários restantes.     exercício 4: jornada de boas-vindas simples cenário: um novo cliente se inscreve na newsletter da techgadgets através de um formulário no site. a empresa quer enviar uma série de 2 emails de boas-vindas.   * email 1: enviado imediatamente após a inscrição, agradecendo e oferecendo um cupom de 10% de desconto. * email 2: enviado 3 dias após o email 1, destacando as categorias de produtos mais populares.   a inscrição adiciona o cliente a uma data extension chamada newsletter_subscribers (customerid [pk], emailaddress, firstname, signupdate).   tarefa: descreva como configurar esta jornada no journey builder.   solução:   1. criar emails: crie os dois emails de boas-vindas (email 1 com cupom, email 2 com categorias) no content builder. 2. criar jornada: no journey builder, crie uma nova \"multi-step journey\". 3. configurar fonte de entrada (entry source):    * selecione \"data extension\" como fonte de entrada.    * escolha a de newsletter_subscribers.    * configure o gatilho para avaliar \"new records only\" (ou configurar uma automação para adicionar novos registros a uma de de entrada da jornada).    * defina um filtro (opcional, mas recomendado) para garantir que apenas registros com signupdate recente entrem, ou use uma automação para controlar a entrada.    * agende a avaliação da fonte de entrada (ex: a cada hora). 4. adicionar atividades:    * atividade 1 (email 1): arraste uma atividade \"email\" para o canvas imediatamente após a fonte de entrada. selecione o email 1 criado no content builder. configure as opções de envio (send classification, etc.).    * atividade 2 (wait): arraste uma atividade \"wait\" após o email 1. configure-a para esperar por uma duração de 3 dias (\"wait by duration\").    * atividade 3 (email 2): arraste outra atividade \"email\" após a atividade wait. selecione o email 2 criado no content builder. configure as opções de envio. 5. configurar metas e saída (opcional): defina metas (ex: cliente fez uma compra) ou critérios de saída, se aplicável. 6. validar e ativar:    * use a função \"validate\" para verificar se há erros na configuração da jornada.    * configure as \"journey settings\": defina o modo de entrada do contato (provavelmente \"no re-entry\" para uma jornada de boas-vindas) e o endereço de email padrão a ser usado.    * ative a jornada.   explicação: a jornada começa quando um novo registro é detectado na de newsletter_subscribers. o primeiro email é enviado imediatamente. a jornada então pausa por 3 dias usando uma atividade wait. após a espera, o segundo email é enviado. a configuração da fonte de entrada e das configurações da jornada (especialmente o modo de reentrada) é crucial para garantir que os clientes recebam a série de boas-vindas apenas uma vez.     exercício 5: análise de entregabilidade (bounce rate alto) cenário: após um envio de email para uma lista de clientes que não recebiam comunicação há mais de um ano, a techgadgets observou uma taxa de devolução (bounce rate) de 15%, sendo a maioria hard bounces.   tarefa: quais são as possíveis causas para essa alta taxa de hard bounce e quais ações um email specialist deve tomar para investigar e mitigar o problema?   solução:   possíveis causas:   1. lista desatualizada/antiga: a causa mais provável. endereços de email podem ter sido desativados, excluídos ou alterados ao longo de um ano sem comunicação. 2. erros de digitação na coleta: endereços coletados com erros de digitação. 3. endereços inválidos/falsos: inscrições com emails falsos ou temporários. 4. bloqueios por isps: embora mais comum para soft bounces, bloqueios severos ou problemas de reputação podem, em alguns casos, ser reportados como hard bounces por certos isps. 5. problemas técnicos (menos comum): erros na configuração do domínio de envio ou problemas temporários com o servidor de email do destinatário que foram erroneamente classificados como hard bounce.   ações de investigação e mitigação:   1. analisar relatório de bounces:    * no tracking do email studio, analisar o relatório detalhado de bounces para o envio específico.    * verificar os códigos e mensagens de erro associados aos hard bounces para obter mais pistas (ex: \"user unknown\", \"domain not found\"). 2. segmentar a lista:    * identificar a origem da lista enviada. era uma lista comprada (má prática)? uma lista antiga interna?    * analisar a data da última interação ou opt-in dos endereços que resultaram em bounce. 3. implementar higiene de lista:    * remoção automática: o marketing cloud geralmente remove automaticamente endereços com hard bounce de envios futuros (verificar configurações da conta).    * processo de limpeza: criar uma automação no automation studio para identificar e marcar ou remover assinantes inativos (sem aberturas/cliques por um longo período, ex: 6-12 meses) antes de tentar reengajá-los.    * validação de email: considerar o uso de serviços de validação de email externos para verificar a validade dos endereços antes de importá-los ou enviá-los (especialmente para listas mais antigas). 4. revisar processo de coleta:    * garantir que os formulários de inscrição tenham validação no campo de email.    * implementar double opt-in para confirmar a validade do endereço e o interesse do assinante no momento da inscrição. 5. estratégia de reengajamento gradual:    * para listas antigas, em vez de um envio em massa, considerar uma campanha de reengajamento gradual para um pequeno segmento por vez, monitorando de perto as taxas de bounce e engajamento.    * remover imediatamente os que resultarem em hard bounce e considerar remover os não engajados após a campanha. 6. monitorar reputação: verificar a reputação do ip de envio e do domínio através de ferramentas como senderscore.org ou google postmaster tools, pois altas taxas de bounce podem prejudicá-la.   explicação: uma alta taxa de hard bounce, especialmente em listas antigas, indica problemas com a qualidade e validade dos endereços. a ação principal é focar na higiene da lista, removendo endereços inválidos e inativos, e revisando os processos de coleta para evitar a entrada de emails ruins. o monitoramento contínuo e estratégias de reengajamento cuidadosas são essenciais para manter a saúde da lista e a entregabilidade.     3.3. estudo de caso - email specialist: campanha de reengajamento para e-commerce contexto da empresa empresa: modaviva setor: e-commerce de moda desafio: queda na taxa de engajamento de email (aberturas e cliques) nos últimos 6 meses   a modaviva é uma loja online de moda com 5 anos de operação no mercado brasileiro. a empresa possui uma base de aproximadamente 500.000 assinantes de email, construída ao longo dos anos através de compras no site, cadastros para descontos e campanhas de aquisição. problema nos últimos 6 meses, a equipe de marketing notou uma queda constante nas taxas de abertura e clique dos emails promocionais. a análise inicial mostrou que:   * taxa de abertura caiu de 22% para 12% * taxa de clique caiu de 3,5% para 1,2% * taxa de conversão de email para venda caiu de 0,8% para 0,3%   além disso, a empresa observou um aumento na taxa de unsubscribe e spam complaints. a equipe de marketing está preocupada com o impacto nas vendas, já que o email representa 35% da receita total. análise da situação como email specialist contratado para resolver o problema, você realizou uma análise detalhada e identificou os seguintes fatores:   1. segmentação inadequada: a empresa estava enviando o mesmo email para toda a base, sem considerar o histórico de compras, interesses ou nível de engajamento.   2. frequência excessiva: a frequência de envios aumentou de 2 emails por semana para 5 emails por semana nos últimos meses.   3. conteúdo repetitivo: os emails seguiam sempre o mesmo formato e tipo de oferta, sem personalização significativa.   4. lista desatualizada: aproximadamente 40% dos assinantes não abriram nenhum email nos últimos 90 dias.   5. problemas de entregabilidade: análise no google postmaster tools mostrou uma queda na reputação do domínio de envio. estratégia de solução 1. segmentação da base implementação no marketing cloud:   -- criação de segmentos por engajamento no automation studio   select        s.subscriberkey,       s.emailaddress,       s.firstname,       s.lastname,       case            when max(o.eventdate) >= dateadd(day, -30, getdate()) then 'ativo'           when max(o.eventdate) >= dateadd(day, -90, getdate()) then 'recente'           when max(o.eventdate) >= dateadd(day, -180, getdate()) then 'inativo'           else 'dormente'       end as engagementlevel   from        _subscribers s   left join        _open o on s.subscriberkey = o.subscriberkey   where        s.status = 'active'   group by        s.subscriberkey,       s.emailaddress,       s.firstname,       s.lastname   essa consulta sql foi usada para criar quatro data extensions de segmentação:   * engagement_active (abriu email nos últimos 30 dias) * engagement_recent (abriu email entre 31-90 dias) * engagement_inactive (abriu email entre 91-180 dias) * engagement_dormant (sem abertura há mais de 180 dias) 2. campanha de reengajamento jornada no journey builder:   1. entrada: data extension engagement_inactive e engagement_dormant   2. email 1: sentimos sua falta      * assunto: \"[nome], sentimos sua falta! veja o que preparamos para você\"    * conteúdo: mensagem personalizada reconhecendo a ausência, destacando novidades da loja e oferecendo um cupom de 15% de desconto.    * ampscript para personalização:   %%[   var @firstname   set @firstname = attributevalue(\"firstname\")   if empty(@firstname) then     set @firstname = \"cliente\"   endif   ]%%   olá %%=v(@firstname)=%%,   sentimos sua falta na modaviva! notamos que faz um tempo desde sua última visita...   3. decisão split: baseada em abertura do email 1      * caminho \"abriu\": segue para email 2 (ofertas personalizadas)    * caminho \"não abriu\": segue para email 3 (última tentativa)   4. email 2: ofertas personalizadas      * assunto: \"selecionamos estas peças especialmente para você\"    * conteúdo: produtos recomendados baseados no histórico de navegação/compra    * implementação de einstein content selection para recomendações personalizadas   5. email 3: última tentativa      * assunto: \"última chance: queremos você de volta (cupom de 25%)\"    * conteúdo: oferta mais agressiva e pesquisa sobre motivo do desengajamento    * botão claro para reconfirmar interesse em receber emails   6. decisão final: baseada em qualquer engajamento na jornada      * engajou: move para segmento \"reengajado\"    * não engajou: move para processo de sunset (remoção gradual) 3. otimização de frequência e conteúdo implementação:   1. redução de frequência:      * segmento ativo: até 3 emails por semana    * segmento recente: 2 emails por semana    * segmento inativo: 1 email por semana    * segmento dormente: apenas emails da campanha de reengajamento   2. diversificação de conteúdo:      * implementação de testes a/b para assuntos (30% da audiência, vencedor para 70%)    * rotação de tipos de email: promocional, conteúdo, curadoria, novidades    * personalização baseada em categoria de interesse:   -- identificação de categoria de interesse no automation studio   select        c.subscriberkey,       p.category,       count(*) as categorycount   from        click_data c   join        product_data p on c.productid = p.productid   where        c.eventdate >= dateadd(month, -3, getdate())   group by        c.subscriberkey,       p.category   order by        c.subscriberkey,       categorycount desc 4. limpeza de lista e melhoria de entregabilidade implementação:   1. processo de sunset:      * automação para identificar assinantes sem engajamento após a campanha de reengajamento    * remoção gradual (não abrupta) para evitar impacto na entregabilidade    * documentação do processo para conformidade com lgpd   2. melhoria de autenticação:      * implementação de dkim, spf e dmarc    * monitoramento diário de métricas de entregabilidade    * implementação de ip warmup para novos ips dedicados resultados após 3 meses de implementação da estratégia:   1. engajamento:      * taxa de abertura geral: aumento de 12% para 19%    * taxa de clique geral: aumento de 1,2% para 2,8%    * taxa de conversão: aumento de 0,3% para 0,65%   2. campanha de reengajamento:      * 22% dos assinantes inativos reengajaram    * 8% dos assinantes dormentes reengajaram    * redução de 15% no tamanho da lista após sunset process   3. entregabilidade:      * redução de 70% nas taxas de spam complaints    * melhoria na reputação do domínio no google postmaster tools    * aumento de 25% na taxa de entrega na caixa de entrada (inbox placement)   4. impacto no negócio:      * aumento de 35% na receita atribuída a email marketing    * roi da campanha de reengajamento: 420% lições aprendidas e melhores práticas 1. segmentação é fundamental: a segmentação por engajamento mostrou-se crucial para melhorar resultados e proteger a reputação de envio.   2. qualidade sobre quantidade: a redução na frequência de envios resultou em maior engajamento e menos unsubscribes.   3. personalização efetiva: o uso de ampscript e einstein para personalização aumentou significativamente as taxas de conversão.   4. manutenção proativa da lista: implementar processos regulares de limpeza e sunset é essencial para manter a saúde da lista a longo prazo.   5. monitoramento contínuo: a implementação de dashboards de monitoramento permitiu identificar problemas rapidamente e fazer ajustes. código e configurações adicionais exemplo de configuração de automação para segmentação diária // script activity no automation studio para logging de resultados   var segmentationresults = {       totalsubscribers: 0,       activesegment: 0,       recentsegment: 0,       inactivesegment: 0,       dormantsegment: 0   };   // contar registros em cada de   var activede = dataextension.init(\"engagement_active\");   var recentde = dataextension.init(\"engagement_recent\");   var inactivede = dataextension.init(\"engagement_inactive\");   var dormantde = dataextension.init(\"engagement_dormant\");   segmentationresults.activesegment = activede.rows.lookup([]).length;   segmentationresults.recentsegment = recentde.rows.lookup([]).length;   segmentationresults.inactivesegment = inactivede.rows.lookup([]).length;   segmentationresults.dormantsegment = dormantde.rows.lookup([]).length;   segmentationresults.totalsubscribers = segmentationresults.activesegment +                                          segmentationresults.recentsegment +                                          segmentationresults.inactivesegment +                                          segmentationresults.dormantsegment;   // registrar resultados   var logde = dataextension.init(\"segmentation_log\");   logde.rows.add({       date: platform.function.systemdatetolocaldate(now()),       totalsubscribers: segmentationresults.totalsubscribers,       activecount: segmentationresults.activesegment,       recentcount: segmentationresults.recentsegment,       inactivecount: segmentationresults.inactivesegment,       dormantcount: segmentationresults.dormantsegment,       activepercentage: (segmentationresults.activesegment / segmentationresults.totalsubscribers * 100).tofixed(2)   }); exemplo de ampscript para email de reengajamento com produtos personalizados %%[   /* obter informações do assinante */   var @subscriberkey, @firstname, @lastcategory, @lastproduct   set @subscriberkey = attributevalue(\"_subscriberkey\")   set @firstname = attributevalue(\"firstname\")   /* definir saudação padrão se o nome estiver vazio */   if empty(@firstname) then     set @firstname = \"cliente\"   endif   /* buscar última categoria visualizada */   set @categoryrows = lookuprows(\"customer_category_affinity\", \"subscriberkey\", @subscriberkey)   if rowcount(@categoryrows) > 0 then     set @categoryrow = row(@categoryrows, 1)     set @lastcategory = field(@categoryrow, \"category\")   else     set @lastcategory = \"tendências\"   endif   /* buscar produtos recomendados baseados na categoria */   set @productrows = lookuporderedrows(\"featured_products\", 3, \"rating desc\", \"category\", @lastcategory)   set @productcount = rowcount(@productrows)   ]%%   <h2>olá %%=v(@firstname)=%%!</h2>   <p>sentimos sua falta na modaviva! vimos que você se interessou por itens da nossa coleção de <strong>%%=v(@lastcategory)=%%</strong> anteriormente.</p>   <p>separamos algumas novidades que achamos que você vai adorar:</p>   <table width=\"100%\" cellpadding=\"10\" cellspacing=\"0\" border=\"0\">     <tr>   %%[   /* loop para exibir produtos recomendados */   for @i = 1 to @productcount do     set @productrow = row(@productrows, @i)     set @productname = field(@productrow, \"productname\")     set @productimage = field(@productrow, \"imageurl\")     set @productprice = field(@productrow, \"price\")     set @producturl = field(@productrow, \"producturl\")     set @productdiscount = field(@productrow, \"discountpercentage\")     set @finalprice = @productprice - (@productprice * (@productdiscount/100))   ]%%       <td align=\"center\" width=\"33%\">         <img src=\"%%=v(@productimage)=%%\" width=\"180\" alt=\"%%=v(@productname)=%%\" style=\"display:block; margin-bottom:10px;\">         <strong>%%=v(@productname)=%%</strong><br>         %%[ if @productdiscount > 0 then ]%%           <span style=\"text-decoration:line-through;\">r$ %%=formatnumber(@productprice, \"n2\", \"pt-br\")=%%</span><br>           <span style=\"color:#d9534f;\"><strong>r$ %%=formatnumber(@finalprice, \"n2\", \"pt-br\")=%%</strong></span><br>           <span style=\"background-color:#d9534f; color:white; padding:3px 5px; font-size:12px;\">-%%=v(@productdiscount)=%%% off</span>         %%[ else ]%%           <strong>r$ %%=formatnumber(@productprice, \"n2\", \"pt-br\")=%%</strong>         %%[ endif ]%%         <br><br>         <a href=\"%%=redirectto(concat(@producturl, '?utm_source=email&utm_medium=reengagement&utm_campaign=winback'))=%%\" style=\"background-color:#4caf50; color:white; padding:8px 15px; text-decoration:none; border-radius:3px;\">ver produto</a>       </td>   %%[ next @i ]%%     </tr>   </table>   <div style=\"margin:30px 0; padding:15px; background-color:#f8f9fa; border-radius:5px; text-align:center;\">     <p style=\"margin-bottom:15px;\"><strong>presente especial para você voltar!</strong></p>     <p style=\"font-size:18px; margin-bottom:20px;\">use o cupom <strong style=\"background-color:#000; color:#fff; padding:5px 10px;\">voltei15</strong> e ganhe 15% off em qualquer compra</p>     <p style=\"font-size:12px;\">válido por 7 dias. não cumulativo com outras promoções.</p>   </div> conclusão este estudo de caso demonstra como um email specialist pode transformar o desempenho de um programa de email marketing através de segmentação estratégica, personalização avançada e melhores práticas de entregabilidade. a abordagem sistemática para reengajar assinantes inativos não apenas melhorou as métricas de engajamento, mas também teve um impacto significativo na receita da empresa.   a implementação bem-sucedida utilizou diversos recursos do marketing cloud, incluindo automation studio para segmentação, journey builder para orquestração da jornada de reengajamento, e ampscript para personalização avançada. o monitoramento contínuo e os ajustes baseados em dados foram fundamentais para o sucesso da estratégia.     4. aprofundamento: marketing cloud administrator esta seção aborda as responsabilidades e conhecimentos técnicos essenciais para um administrador do salesforce marketing cloud. o foco está na configuração, gerenciamento, segurança e manutenção da plataforma para garantir seu funcionamento eficiente e seguro, além de dar suporte aos usuários e às estratégias de marketing. 4.1. conteúdo teórico e melhores práticas 4.1.1. configuração da conta (setup) a área de configuração (setup) é o centro nervoso da administração do marketing cloud. é onde se definem as configurações globais da conta, se gerenciam unidades de negócio, se configura a segurança e se habilitam diversas funcionalidades.   navegação na interface de setup:   * acesso: geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do marketing cloud. * estrutura: organizada em categorias lógicas (administração, configurações da plataforma, configurações de recursos, etc.) para facilitar a localização das configurações desejadas.   gerenciamento de business units (unidades de negócio):   * conceito: permitem dividir a conta do marketing cloud em hierarquias lógicas, geralmente representando diferentes marcas, regiões geográficas ou departamentos dentro de uma organização. * benefícios:    * separação de dados e conteúdo: cada bu pode ter seus próprios assinantes, data extensions, conteúdo, envios e relatórios.    * gerenciamento de permissões: usuários podem ter acesso e permissões específicas para determinadas bus.    * branding separado: possibilidade de configurar sender authentication packages (sap) diferentes para cada bu. * hierarquia: existe uma bu principal (parent/enterprise) e bus filhas (child). as configurações podem ser herdadas da bu pai ou definidas especificamente para a bu filha. * gerenciamento: criação, edição e exclusão de bus (geralmente requerem suporte da salesforce ou privilégios específicos).   configurações da conta:   * informações da conta: nome da conta, id da conta (mid), fuso horário padrão, configurações de idioma e localidade. * segurança:    * políticas de senha: definir requisitos de complexidade, expiração e histórico de senhas.    * autenticação multifator (mfa): habilitar e gerenciar mfa para aumentar a segurança do login (obrigatório pela salesforce).    * restrições de login por ip: limitar o acesso à conta a partir de faixas de ip confiáveis.    * configurações de sessão: definir timeouts de sessão e outras políticas. * sender authentication package (sap): configuração de domínios de envio dedicados, ips dedicados (opcional), autenticação dkim/spf, e wrapping de links/imagens para melhorar a entregabilidade e o branding. * reply mail management (rmm): configurar como as respostas aos emails enviados são tratadas (ex: encaminhar para um endereço específico, aplicar regras automáticas). * integrações: configurar conexões com outras nuvens salesforce (marketing cloud connect), apis e sistemas externos.   configurações de email:   * email studio admin: configurações específicas do email studio, como cabeçalhos e rodapés padrão, gerenciamento de classificações de envio (comercial vs. transacional), configurações de rmm, gerenciamento de domínios de envio. * gerenciamento de supressão: listas de endereços de email que não devem receber comunicações (ex: reclamações de spam, bounces globais).   configurações de mobile:   * mobileconnect (sms): configuração de códigos curtos/longos, palavras-chave para opt-in/opt-out, modelos de mensagem. * mobilepush (notificações push): registro de aplicativos móveis, upload de certificados (apns para ios, fcm para android), configuração de atributos de push.   outras configurações importantes:   * feature settings: habilitar ou desabilitar funcionalidades específicas do marketing cloud para a conta ou bus. * installed packages: gerenciar pacotes de integração de api (para rest e soap), definindo componentes e escopos de permissão. * audit trail (trilha de auditoria): visualizar logs de atividades importantes realizadas na conta (logins, alterações de configuração, envios, etc.) para fins de segurança e conformidade. * ftp accounts: gerenciar contas de ftp para transferência de arquivos.   um administrador precisa ter um conhecimento profundo da área de setup para configurar corretamente a conta, garantir a segurança, gerenciar o acesso dos usuários e habilitar as funcionalidades necessárias para as equipes de marketing operarem de forma eficaz e segura. 4.1.2. gerenciamento de usuários, funções e permissões o controle de acesso é crucial para a segurança e a governança do marketing cloud. o administrador é responsável por criar usuários, atribuir funções apropriadas e gerenciar permissões para garantir que cada pessoa tenha acesso apenas ao que é necessário para realizar seu trabalho.   usuários (users):   * criação: novos usuários são criados na área de setup, fornecendo informações básicas como nome, endereço de email (que serve como nome de usuário), fuso horário e configurações de localidade. * status: usuários podem estar ativos, inativos ou bloqueados. * associação a business units: um usuário pode ter acesso a uma ou mais business units (bus). o acesso padrão pode ser definido na criação. * api user: um tipo especial de usuário criado para integrações via api, sem acesso à interface do usuário. * gerenciamento: editar informações do usuário, redefinir senhas, desbloquear contas, ativar/desativar usuários.   funções (roles):   * conceito: conjuntos pré-definidos ou personalizados de permissões que determinam o que um usuário pode ver e fazer dentro do marketing cloud. * funções padrão: o marketing cloud vem com várias funções padrão que cobrem casos de uso comuns:    * administrator: acesso quase total à conta (pode ser limitado por bu).    * marketing cloud administrator: acesso amplo às configurações e funcionalidades administrativas.    * marketing cloud viewer: acesso somente leitura à maior parte da plataforma.    * marketing cloud channel manager: gerencia canais específicos como email studio, mobile studio.    * marketing cloud security administrator: focado em configurações de segurança.    * marketing cloud content editor/publisher: cria e gerencia conteúdo.    * data manager: gerencia data extensions e importações/exportações.    * (outras funções específicas de studios/builders) * funções personalizadas: permitem criar conjuntos de permissões granulares para atender a necessidades específicas que não são cobertas pelas funções padrão. é uma prática recomendada usar funções personalizadas para seguir o princípio do menor privilégio. * atribuição: um usuário pode ter uma ou mais funções atribuídas. as permissões são cumulativas (geralmente, a permissão mais permissiva prevalece em caso de conflito, mas há exceções).   permissões (permissions):   * granularidade: as permissões controlam o acesso a funcionalidades específicas dentro de cada studio, builder ou área de configuração (ex: criar email, enviar email, importar dados, criar automação, acessar setup). * allow/deny (permitir/negar): as permissões são geralmente definidas como \"allow\" (permitir). algumas permissões podem ter uma opção explícita de \"deny\" (negar), que sobrepõe qualquer \"allow\" para essa permissão específica. * visualização: ao criar ou editar uma função personalizada, o administrador pode navegar por uma árvore detalhada de permissões e marcar quais devem ser concedidas. * permissões por business unit: além das permissões gerais da função, o acesso a itens específicos (como data extensions, emails, pastas de conteúdo) pode ser controlado no nível da business unit, permitindo que usuários em bus diferentes não vejam ou modifiquem os ativos uns dos outros.   melhores práticas:   * princípio do menor privilégio: conceder aos usuários apenas as permissões estritamente necessárias para realizar suas tarefas. * usar funções personalizadas: evitar atribuir funções padrão muito amplas (como administrator) sempre que possível. criar funções personalizadas adaptadas às necessidades específicas. * revisão periódica: revisar regularmente as atribuições de funções e permissões dos usuários para garantir que ainda sejam apropriadas, especialmente quando há mudanças de função ou saída de funcionários. * separação de deveres: implementar funções que separem responsabilidades críticas (ex: quem cria o email vs. quem aprova e envia). * gerenciamento de acesso a bus: definir cuidadosamente quais usuários têm acesso a quais business units. * documentação: manter documentação sobre as funções personalizadas criadas e suas finalidades.   o gerenciamento eficaz de usuários, funções e permissões é uma tarefa contínua e essencial para manter a segurança, a organização e a conformidade da conta do marketing cloud. 4.1.3. segurança de dados a segurança dos dados dos clientes e da própria conta do marketing cloud é uma responsabilidade primordial do administrador. isso envolve a implementação de várias camadas de segurança, desde o controle de acesso físico e lógico até a proteção dos dados em trânsito e em repouso.   controle de acesso (revisão):   * autenticação multifator (mfa): essencial para proteger contra acesso não autorizado, mesmo que as senhas sejam comprometidas. o administrador garante que a mfa esteja habilitada e sendo usada pelos usuários. * políticas de senha fortes: definir e impor requisitos de complexidade, comprimento, histórico e expiração de senhas. * restrições de login por ip: limitar o acesso à plataforma apenas a partir de redes confiáveis. * gerenciamento de sessão: configurar timeouts de inatividade para desconectar usuários automaticamente. * funções e permissões (menor privilégio): garantir que os usuários tenham apenas o acesso necessário.   segurança de dados em repouso:   * criptografia:    * transparent data encryption (tde): criptografia em nível de banco de dados aplicada automaticamente pelo marketing cloud para proteger os dados armazenados. o administrador geralmente não precisa configurar isso, mas deve estar ciente de sua existência.    * field-level encryption (fle - criptografia em nível de campo): permite criptografar campos específicos dentro de data extensions que contenham dados sensíveis (pii - personally identifiable information). requer configuração e gerenciamento de chaves. os dados criptografados não podem ser usados diretamente em segmentações ou personalização sem descriptografia (geralmente via script).    * tokenized sending: uma abordagem onde dados sensíveis são substituídos por tokens antes de serem enviados para o marketing cloud. os dados reais permanecem no sistema de origem seguro. o marketing cloud usa os tokens para personalização e, no momento do envio, pode (em alguns cenários) buscar os dados reais via api ou o sistema receptor pode reidratar os dados. * data masking (mascaramento de dados): ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados.   segurança de dados em trânsito:   * tls (transport layer security): o marketing cloud usa tls (sucessor do ssl) para criptografar a comunicação entre o navegador do usuário e a plataforma, bem como para conexões de api e transferências de ftp (via sftp ou ftp/s). * criptografia de email (opcional): embora o tls proteja a conexão inicial, o email em si pode não ser criptografado ponta a ponta. soluções adicionais podem ser implementadas para criptografia de email em trânsito ou em repouso no destino, se necessário (geralmente fora do escopo padrão do marketing cloud).   segurança de api e integrações:   * installed packages: gerenciar pacotes de api, definindo escopos de permissão específicos para cada integração. * autenticação oauth 2.0: método seguro e padrão para autenticar chamadas de api, usando tokens de acesso em vez de credenciais de usuário. * gerenciamento de chaves e segredos: armazenar chaves de api e segredos de cliente de forma segura e rotacioná-los periodicamente. * monitoramento de api: acompanhar o uso da api para detectar atividades suspeitas ou abusivas.   conformidade e governança:   * regulamentações (gdpr, lgpd, ccpa, hipaa, etc.): o administrador deve entender os requisitos das regulamentações aplicáveis e configurar o marketing cloud para ajudar a organização a cumpri-los (ex: gerenciamento de consentimento, políticas de retenção de dados, tratamento de solicitações de titulares de dados). * políticas internas: implementar e garantir a adesão às políticas de segurança de dados da organização dentro do marketing cloud. * audit trail (trilha de auditoria): usar a trilha de auditoria para monitorar atividades importantes, investigar incidentes de segurança e demonstrar conformidade. * data retention policies (políticas de retenção de dados): configurar políticas em data extensions para excluir dados automaticamente após um período definido, conforme exigido por regulamentações ou políticas internas.   segurança física e da plataforma:   * responsabilidade da salesforce: a salesforce é responsável pela segurança física dos data centers e pela segurança da infraestrutura subjacente do marketing cloud. * modelo de responsabilidade compartilhada: o cliente (e seu administrador) é responsável por configurar e usar a plataforma de forma segura (controle de acesso, segurança de dados, conformidade). * salesforce security center (centro de segurança): ferramenta (geralmente um add-on) que fornece visibilidade e controle aprimorados sobre a postura de segurança da conta.   manter a segurança dos dados no marketing cloud é um esforço contínuo que exige vigilância, conhecimento das ferramentas e funcionalidades de segurança disponíveis, e alinhamento com as políticas da organização e regulamentações externas. 4.1.4. gerenciamento de dados (modelos de dados, importação/exportação) o gerenciamento eficaz dos dados é central para as operações do marketing cloud. o administrador desempenha um papel crucial na definição da arquitetura de dados, na garantia da qualidade dos dados e na facilitação dos processos de importação e exportação.   modelos de dados (contact builder):   * contact builder: ferramenta principal para definir e gerenciar como os dados dos contatos são organizados no marketing cloud.    * data designer: interface visual dentro do contact builder para criar o modelo de dados, vinculando data extensions através de relacionamentos.    * attribute groups (grupos de atributos): coleções lógicas de data extensions relacionadas entre si e vinculadas ao registro do contato através do contact key/subscriber key. permitem criar uma visão 360º do cliente.    * populations (populações - legado): método mais antigo de agrupar conjuntos de assinantes. geralmente substituído por data extensions e attribute groups. * data extensions (des):    * revisão: tabelas relacionais para armazenar dados.    * chaves primárias (primary keys): campos que identificam exclusivamente um registro em uma de.    * send relationships: define como uma de se relaciona com a all subscribers list para fins de envio, especificando qual campo na de corresponde ao subscriber key.    * políticas de retenção de dados (data retention): configuração em nível de de para excluir automaticamente registros após um período específico ou quando a de atinge um certo tamanho. essencial para conformidade e higiene de dados. * lists (listas - legado):    * armazenamento simples de assinantes com atributos limitados.    * menos flexibilidade que as des. * contact key / subscriber key: identificador único para um contato em todo o marketing cloud. é crucial definir uma estratégia consistente para essa chave (ex: usar o id do crm, endereço de email hashado). * melhores práticas de modelagem:    * normalização vs. desnormalização: equilibrar a normalização (evitar redundância) com a desnormalização (juntar dados para facilitar consultas e envios).    * tipos de dados: usar os tipos de dados corretos para cada campo (texto, número, data, booleano, emailaddress, etc.).    * nomenclatura: usar nomes claros e consistentes para des e campos.    * documentação: documentar o modelo de dados, relacionamentos e o propósito de cada de.   importação de dados:   * métodos:    * import wizard (assistente de importação): manual, para arquivos csv/txt/zip.    * automation studio - import file activity: automatizado, para arquivos no ftp.    * api (rest/soap): para integrações em tempo real ou em lote a partir de sistemas externos.    * marketing cloud connect: sincronização de dados do sales/service cloud via synchronized data extensions ou import definitions. * enhanced ftp: servidor ftp seguro fornecido pelo marketing cloud para transferência de arquivos. * file naming patterns (padrões de nomenclatura de arquivos): usar padrões consistentes nos nomes dos arquivos para acionar automações (file drop) ou facilitar o processamento. * validação de dados: implementar verificações durante a importação para garantir a qualidade dos dados (ex: formato de email, valores obrigatórios). * tratamento de erros: configurar notificações ou processos para lidar com erros durante a importação.   exportação de dados:   * métodos:    * automation studio - data extract activity: extrai dados de des ou informações de rastreamento para arquivos no ftp.    * automation studio - file transfer activity: move os arquivos extraídos do ftp para um local externo.    * api (rest/soap): para buscar dados programaticamente.    * relatórios: exportar dados de relatórios padrão ou personalizados. * casos de uso: backup de dados, envio de dados para data warehouses ou ferramentas de bi, compartilhamento de dados com outros sistemas.   qualidade e higiene de dados:   * deduplicação: implementar processos (geralmente via sql query) para identificar e tratar registros duplicados. * validação: garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone). * limpeza de inativos: identificar e remover ou marcar contatos inativos para melhorar a entregabilidade e reduzir custos. * gerenciamento de bounces e unsubscribes: garantir que os bounces e cancelamentos sejam processados corretamente para manter a conformidade e a saúde da lista.   o administrador é o guardião dos dados no marketing cloud, responsável por garantir que eles sejam bem estruturados, precisos, seguros e acessíveis para as necessidades de marketing, ao mesmo tempo em que cumprem as políticas de privacidade e conformidade. 4.1.5. configuração dos studios (email, mobile, social, advertising) embora os especialistas de canal usem os studios no dia a dia, o administrador é responsável por configurar as bases de cada studio, habilitar funcionalidades e garantir que eles estejam prontos para uso.   email studio:   * admin settings:    * sender profiles: definir o nome e endereço de email do remetente que aparecem para o destinatário.    * delivery profiles: definir o ip de envio, cabeçalhos e rodapés padrão a serem usados.    * send classifications: combinar sender profile, delivery profile e política de cancelamento (comercial ou transacional) para garantir conformidade e consistência nos envios.    * reply mail management (rmm): configurar regras para tratar respostas automáticas (ex: fora do escritório) e respostas manuais.    * from name / email address verification: verificar e aprovar os endereços de email que podem ser usados como remetentes.    * url expiration: definir por quanto tempo os links rastreados nos emails permanecem ativos.    * brandbuilder: personalizar a aparência da interface do marketing cloud com o logo e cores da empresa (se aplicável). * content builder settings: configurar opções de compartilhamento de conteúdo entre bus.   mobile studio:   * mobileconnect (sms/mms):    * account administration: configurar códigos curtos ou longos (números de envio), palavras-chave globais (help, stop), mensagens padrão.    * keyword management: gerenciar palavras-chave para campanhas de opt-in.    * contact management: gerenciar contatos e opt-outs de sms. * mobilepush (notificações push):    * app registration: registrar aplicativos ios e android, fazendo upload dos certificados de push necessários (apns para ios, fcm api key para android).    * custom sound/alerts: configurar sons personalizados para notificações.    * geofence/beacon messaging: configurar locais para mensagens baseadas em geolocalização (requer sdk apropriado no app).    * contact management: gerenciar contatos e opt-outs de push. * groupconnect (line - específico para ásia): configurar integração com contas do line.   social studio (geralmente uma plataforma separada, mas integrada):   * admin settings:    * user management: gerenciar usuários e permissões dentro do social studio.    * social account management: conectar e gerenciar contas de redes sociais (facebook, twitter, linkedin, instagram, etc.).    * topic profiles: configurar perfis de monitoramento de palavras-chave e tópicos nas redes sociais.    * macros & rules: configurar regras de automação para classificar, rotear ou responder a posts sociais.    * approval rules: definir fluxos de aprovação para publicação de conteúdo.   advertising studio (geralmente uma plataforma separada, mas integrada):   * admin settings:    * advertising audiences: conectar contas de plataformas de publicidade (facebook ads, google ads, linkedin ads, twitter ads, etc.).    * data sources: configurar como os dados do marketing cloud (ou sales/service cloud) são usados para criar audiências de publicidade.    * lead capture: configurar a captura de leads de anúncios do facebook ou google diretamente para data extensions ou sales cloud.   o administrador garante que esses canais estejam tecnicamente configurados, seguros e prontos para que as equipes de marketing possam criar e executar suas campanhas cross-channel. 4.1.6. journey builder (configuração e administração) o journey builder é uma ferramenta poderosa para orquestrar jornadas de cliente, e o administrador desempenha um papel na sua configuração inicial, monitoramento e solução de problemas.   configurações gerais:   * administration tab (dentro do journey builder):    * contact entry mode: definir o comportamento padrão de reentrada para novas jornadas (no re-entry, re-entry anytime, re-entry only after exiting).    * default email address: definir qual campo de email será usado por padrão para envios de email na jornada (geralmente o campo vinculado ao subscriber key).    * transaction key settings: gerenciar chaves de transação para garantir que um contato não receba a mesma mensagem transacional várias vezes. * event administration (fontes de entrada):    * api events: criar e gerenciar definições de eventos de api que podem ser usados como fontes de entrada.    * salesforce data events: configurar eventos do sales/service cloud que podem acionar a entrada em jornadas (requer mc connect).   gerenciamento de atividades:   * custom activities: o administrador pode instalar e configurar atividades personalizadas (desenvolvidas internamente ou por terceiros) para estender as funcionalidades do journey builder. * activity permissions: garantir que as funções dos usuários tenham as permissões corretas para usar as diferentes atividades do journey builder.   monitoramento e saúde da plataforma:   * journey health & history: monitorar o desempenho das jornadas ativas, verificar taxas de erro, contatos em espera ou com falha. * contact error details: investigar por que contatos específicos falharam ao entrar ou progredir em uma jornada. * performance: acompanhar o uso de recursos pelo journey builder para garantir que não haja gargalos de desempenho.   integração com outras ferramentas:   * automation studio: coordenar jornadas com automações para preparação de dados ou ações pós-jornada. * contact builder: garantir que o modelo de dados no contact builder suporte os critérios de decisão e personalização usados nas jornadas. * analytics builder: usar relatórios para analisar o desempenho das jornadas.   embora a criação das jornadas em si seja geralmente responsabilidade da equipe de marketing, o administrador garante que a infraestrutura do journey builder esteja configurada corretamente, monitora seu desempenho e ajuda a solucionar problemas técnicos. 4.1.7. automation studio (administração) o automation studio é a espinha dorsal para muitos processos de dados e envios agendados no marketing cloud. o administrador é responsável por gerenciar seu uso, monitorar execuções e garantir a eficiência.   gerenciamento de automações:   * overview tab: visualizar o status de todas as automações (ativas, pausadas, agendadas, em execução, com erro). * activity tab: gerenciar atividades individuais (sql queries, imports, extracts, etc.) que podem ser reutilizadas em múltiplas automações. * organização: usar pastas para organizar automações e atividades de forma lógica. * permissões: garantir que os usuários tenham as permissões corretas para criar, editar, executar e pausar automações.   monitoramento:   * automation history: verificar o histórico de execução de cada automação, incluindo status (sucesso, erro), duração e logs detalhados por atividade. * error handling: configurar notificações por email para administradores quando uma automação falha. * performance: monitorar automações que consomem muitos recursos ou demoram muito para executar, otimizando consultas sql ou dividindo processos complexos.   melhores práticas:   * otimização de sql: escrever consultas sql eficientes para evitar timeouts e consumo excessivo de recursos. * tratamento de erros: incluir etapas de verificação e tratamento de erros nas automações sempre que possível. * dependências: gerenciar cuidadosamente as dependências entre diferentes automações ou entre automações e outros processos (ex: chegada de arquivos). * agendamento: evitar agendar muitas automações pesadas para executar ao mesmo tempo. * limpeza: desativar ou excluir automações e atividades que não são mais necessárias. * documentação: documentar o propósito e a lógica de automações complexas.   recursos avançados:   * script activities (ssjs/ampscript): usar scripts para lógica complexa que não pode ser realizada com atividades padrão. o administrador pode precisar revisar ou aprovar o uso desses scripts. * verification activities: adicionar etapas para verificar contagens de registros ou outras condições antes de prosseguir com a automação.   o administrador garante que o automation studio seja usado de forma eficiente e confiável, monitorando seu desempenho e ajudando a solucionar problemas para manter os processos de dados e envios automatizados funcionando sem problemas. 4.1.8. monitoramento e solução de problemas uma parte essencial do trabalho do administrador é monitorar a saúde geral da plataforma marketing cloud e solucionar problemas técnicos que possam surgir.   monitoramento proativo:   * status da salesforce (trust site): acompanhar o status oficial dos serviços do marketing cloud em trust.salesforce.com para estar ciente de manutenções planejadas ou incidentes de serviço. * limites da conta: monitorar o uso de recursos em relação aos limites contratuais (ex: número de contatos, super messages, envios de email, chamadas de api). * desempenho de automações e jornadas: verificar regularmente o status e os logs de erro no automation studio e journey builder. * entregabilidade: monitorar métricas de entregabilidade (bounces, spam complaints) e reputação de envio. * uso de api: acompanhar o volume e as taxas de erro das chamadas de api. * alertas e notificações: configurar alertas para falhas de automação, problemas de entregabilidade ou outros eventos críticos.   ferramentas de diagnóstico:   * automation studio history: logs detalhados de execuções de automação. * journey builder history & contact error details: logs de erros em jornadas. * email studio tracking: detalhes de envios, bounces, cliques, etc. * api logs (via suporte ou ferramentas externas): analisar logs de chamadas de api para diagnosticar problemas de integração. * audit trail: rastrear alterações de configuração que podem ter causado um problema. * sql queries em data views: consultar data views do sistema (_job, _bounce, _open, _click, _sent, _journeyactivity, _journey, etc.) para obter informações detalhadas sobre envios, jornadas e erros.   solução de problemas comuns:   * falhas de automação:    * causas: erros de sql, arquivos de importação ausentes ou mal formatados, problemas de permissão, timeouts.    * solução: analisar logs de erro, validar sql, verificar arquivos e permissões, otimizar processos. * erros em jornadas:    * causas: configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no sales cloud).    * solução: analisar detalhes de erro do contato, validar configuração da jornada e dados de entrada, verificar integrações. * problemas de entregabilidade:    * causas: má reputação, problemas de autenticação, conteúdo de spam, lista de má qualidade.    * solução: verificar autenticação, analisar conteúdo, limpar lista, monitorar reputação, seguir plano de aquecimento de ip se necessário (ver seção de email specialist). * erros de importação/exportação:    * causas: arquivos mal formatados, tipos de dados incompatíveis, problemas de permissão no ftp.    * solução: validar formato do arquivo, verificar mapeamento de campos, checar permissões de ftp. * problemas de login/acesso:    * causas: senha incorreta, conta bloqueada, problemas de mfa, restrições de ip.    * solução: redefinir senha, desbloquear conta, auxiliar com mfa, verificar restrições de ip. * falhas de integração (api/mc connect):    * causas: credenciais inválidas, problemas de permissão, alterações na api, problemas de rede.    * solução: verificar logs de api, validar credenciais e permissões, consultar documentação da api, verificar status do mc connect.   escalonamento e suporte:   * documentação da salesforce (help & training): principal recurso para encontrar soluções e melhores práticas. * trailblazer community: fóruns onde outros usuários e especialistas compartilham conhecimento e soluções. * suporte da salesforce: abrir casos de suporte técnico para problemas que não podem ser resolvidos internamente. o administrador geralmente é o ponto de contato principal.   o administrador atua como a primeira linha de defesa na identificação e resolução de problemas técnicos, garantindo a estabilidade e a confiabilidade da plataforma marketing cloud para os usuários de marketing.     4.2. exercícios práticos - marketing cloud administrator (conteúdo de exercicios_admin.md) exercícios práticos: marketing cloud administrator esta seção contém exercícios práticos para aplicar os conhecimentos relacionados às tarefas de um marketing cloud administrator. cada exercício apresenta um cenário e uma solução detalhada. exercício 1: configuração de business units cenário: a empresa multinacional \"globaltech\" está implementando o marketing cloud e precisa de uma estrutura que permita:   1. separação das comunicações por região (américa do norte, europa, ásia-pacífico) 2. compartilhamento de alguns recursos (templates, imagens) entre todas as regiões 3. isolamento de dados de clientes por região (requisitos de privacidade) 4. relatórios consolidados para a equipe global de marketing   tarefa: descreva como você configuraria as business units (bus) e as permissões para atender a esses requisitos.   solução:   estrutura de business units:   1. parent business unit (bu global):      * função: administração central, recursos compartilhados, relatórios consolidados    * nome: \"globaltech hq\"   2. child business units (bus regionais):      * \"globaltech north america\"    * \"globaltech europe\"    * \"globaltech asia-pacific\"   configuração de recursos compartilhados:   1. content builder:      * criar uma pasta compartilhada \"global templates\" na parent bu com permissões de visualização para todas as child bus    * configurar pastas específicas para cada região nas respectivas child bus   2. shared data extensions:      * criar shared data extensions na parent bu para dados que precisam ser acessados por todas as regiões (ex: produtos globais, templates de email)    * configurar o acesso apropriado para cada child bu   configuração de isolamento de dados:   1. data extensions regionais:      * criar data extensions específicas em cada child bu para armazenar dados de clientes da respectiva região    * não compartilhar estas des com outras bus para manter o isolamento   2. subscriber management:      * configurar all subscribers lists separadas para cada child bu    * implementar processos para evitar duplicação de assinantes entre regiões (se necessário por requisitos de privacidade)   configuração de permissões:   1. administradores globais:      * função: \"global admin\"    * permissões: acesso administrativo completo à parent bu e todas as child bus    * membros: equipe global de ti e marketing   2. administradores regionais:      * função: \"regional admin\" (uma para cada região)    * permissões: acesso administrativo à respectiva child bu e acesso de visualização a recursos compartilhados na parent bu    * membros: gerentes regionais de marketing   3. usuários de marketing regional:      * função: \"regional marketing\" (uma para cada região)    * permissões: acesso operacional à respectiva child bu (criar/editar emails, jornadas, automações) e acesso de visualização a recursos compartilhados    * membros: equipes regionais de marketing   4. analistas globais:      * função: \"global analyst\"    * permissões: acesso de visualização a relatórios em todas as bus    * membros: equipe global de análise de marketing   configuração de relatórios consolidados:   1. datorama (marketing cloud intelligence):      * configurar para coletar dados de todas as child bus    * criar dashboards consolidados para a equipe global   2. automation studio:      * criar automações na parent bu para consolidar dados de desempenho das child bus em data extensions centralizadas para relatórios   explicação: esta estrutura permite que cada região opere de forma independente com seus próprios dados de clientes, enquanto mantém recursos compartilhados e relatórios consolidados. a configuração de permissões garante que os usuários tenham acesso apenas aos dados e recursos necessários para suas funções, mantendo a conformidade com requisitos de privacidade.     exercício 2: gerenciamento de usuários e permissões cenário: a empresa \"finservices\" está expandindo sua equipe de marketing e precisa configurar permissões adequadas no marketing cloud. eles têm os seguintes grupos de usuários:   1. equipe de conteúdo: cria emails e landing pages, mas não deve enviar emails ou acessar dados sensíveis 2. equipe de dados: gerencia importações/exportações e segmentação, mas não cria conteúdo 3. equipe de campanhas: configura e executa campanhas e jornadas usando conteúdo e segmentos criados pelas outras equipes 4. gerentes: supervisionam todas as atividades e precisam de acesso a relatórios   tarefa: descreva como você configuraria as funções (roles) e permissões para cada grupo, seguindo o princípio do menor privilégio.   solução:   1. configuração de funções (roles):   função: content creator   * permissões:    * content builder: create, read, update, delete    * cloudpages: create, read, update, delete    * asset library: create, read, update, delete    * templates: read    * data extensions: read (apenas des específicas para personalização)    * subscribers: read * restrições:    * sem acesso a email studio > send    * sem acesso a journey builder    * sem acesso a automation studio    * acesso limitado a data extensions (apenas visualização de des específicas)   função: data manager   * permissões:    * data extensions: create, read, update, delete    * shared data extensions: create, read, update, delete    * automation studio: create, read, update, delete (apenas atividades relacionadas a dados)    * imports/exports: create, read, update, delete    * sql query activities: create, read, update, delete    * contact builder: read, update * restrições:    * sem acesso a content builder    * sem acesso a email studio > send    * sem acesso a journey builder    * acesso limitado a automation studio (apenas atividades relacionadas a dados)   função: campaign manager   * permissões:    * email studio > send: create, read, update, delete    * journey builder: create, read, update, delete    * automation studio: create, read, update, delete    * content builder: read    * data extensions: read    * tracking & analytics: read * restrições:    * sem permissões para criar/editar conteúdo    * sem permissões para criar/editar data extensions    * sem acesso administrativo   função: marketing manager   * permissões:    * acesso de visualização a todas as áreas    * tracking & analytics: read    * reports: create, read, update, delete    * dashboards: create, read, update, delete    * journey builder: read    * email studio: read    * content builder: read    * data extensions: read * restrições:    * sem permissões para executar envios    * sem permissões para modificar configurações administrativas   2. implementação das permissões:   1. criar as funções:      * no setup > users > roles, criar cada uma das funções acima    * configurar as permissões específicas para cada função conforme detalhado   2. atribuir usuários às funções:      * no setup > users > users, atribuir cada usuário à função apropriada    * para usuários com múltiplas responsabilidades, considerar a criação de funções híbridas ou atribuir múltiplas funções   3. configurar permissões granulares:      * para content builder e data extensions, configurar permissões no nível de pasta:       * criar pastas específicas para cada equipe       * atribuir permissões apropriadas para cada pasta   4. configurar permissões de envio:      * em email studio > admin > send management, configurar as permissões de envio para limitar quem pode iniciar envios   5. documentar e comunicar:      * documentar a estrutura de permissões    * comunicar claramente a cada equipe quais são suas permissões e limitações   explicação: esta configuração segue o princípio do menor privilégio, garantindo que cada grupo tenha acesso apenas às funcionalidades necessárias para suas responsabilidades. a separação de funções entre criação de conteúdo, gerenciamento de dados e execução de campanhas cria um sistema de verificações e balanços que reduz o risco de erros e uso indevido. os gerentes têm visibilidade sobre todas as atividades sem a capacidade de fazer alterações operacionais, permitindo supervisão eficaz.     exercício 3: configuração de automação para importação e segmentação cenário: a empresa de e-commerce \"shopsmart\" precisa automatizar o processo diário de importação de dados de clientes e transações do seu sistema erp para o marketing cloud, seguido por segmentação para campanhas. os dados chegam diariamente às 3h da manhã em um servidor sftp como arquivos csv separados:   * daily_customers.csv (novos clientes e atualizações) * daily_transactions.csv (transações das últimas 24h)   após a importação, eles precisam segmentar:   1. novos clientes para uma jornada de boas-vindas 2. clientes existentes que fizeram uma compra nas últimas 24h para um email de confirmação 3. clientes que gastaram mais de r$500 no último mês para uma campanha vip   tarefa: descreva como você configuraria uma automação no automation studio para realizar essas tarefas diariamente.   solução:   passo 1: preparação das data extensions   criar as seguintes data extensions:   1. customers_master (de principal de clientes)      * customerid (pk)    * email    * firstname    * lastname    * signupdate    * lastupdated    * customerstatus (new/existing)    * totalspentlastmonth    * outros campos relevantes   2. daily_transactions (de para transações diárias)      * transactionid (pk)    * customerid    * transactiondate    * amount    * productids    * outros campos relevantes   3. new_customers_journey (de para jornada de boas-vindas)      * customerid (pk)    * email    * firstname    * signupdate   4. recent_purchasers (de para email de confirmação)      * customerid (pk)    * email    * firstname    * transactionid    * transactiondate    * amount   5. vip_customers (de para campanha vip)      * customerid (pk)    * email    * firstname    * totalspentlastmonth   passo 2: configuração da automação no automation studio   1. criar nova automação:      * nome: \"daily customer data processing\"    * agendamento: diariamente às 3:30 am (permitindo tempo para os arquivos chegarem)   2. adicionar atividades à automação:   etapa 1: importação de arquivos      * atividade 1: file transfer         * tipo: import from sftp       * arquivo de origem: /incoming/daily_customers.csv       * destino: /import/daily_customers.csv      * atividade 2: file transfer         * tipo: import from sftp       * arquivo de origem: /incoming/daily_transactions.csv       * destino: /import/daily_transactions.csv   etapa 2: processamento de dados de clientes      * atividade 3: import file       * arquivo: /import/daily_customers.csv       * destino: data extension \"customers_master\"       * ação: update (adicionar novos registros, atualizar existentes)       * chave de identificação: customerid   etapa 3: processamento de dados de transações      * atividade 4: import file       * arquivo: /import/daily_transactions.csv       * destino: data extension \"daily_transactions\"       * ação: overwrite (substituir dados diariamente)   etapa 4: segmentação - novos clientes      * atividade 5: sql query       * nome: \"segment_new_customers\"       * consulta:   select      customerid,      email,      firstname,      signupdate   from      customers_master   where      customerstatus = 'new'     and signupdate >= dateadd(day, -1, getdate())         * destino: data extension \"new_customers_journey\"       * ação: overwrite   etapa 5: segmentação - compradores recentes      * atividade 6: sql query       * nome: \"segment_recent_purchasers\"       * consulta:   select      c.customerid,      c.email,      c.firstname,      t.transactionid,      t.transactiondate,      t.amount   from      daily_transactions t     join customers_master c on t.customerid = c.customerid   where      t.transactiondate >= dateadd(day, -1, getdate())         * destino: data extension \"recent_purchasers\"       * ação: overwrite   etapa 6: segmentação - clientes vip      * atividade 7: sql query       * nome: \"segment_vip_customers\"       * consulta:   select      customerid,      email,      firstname,      totalspentlastmonth   from      customers_master   where      totalspentlastmonth > 500         * destino: data extension \"vip_customers\"       * ação: overwrite   etapa 7: notificação de conclusão (opcional)      * atividade 8: send email       * enviar email de notificação para administradores informando a conclusão da automação e estatísticas básicas (registros processados)   passo 3: configuração das jornadas/campanhas   1. jornada de boas-vindas:      * configurar uma jornada no journey builder que use a de \"new_customers_journey\" como fonte de entrada    * configurar para verificar novos registros diariamente após a conclusão da automação   2. email de confirmação de compra:      * configurar uma automação separada ou jornada que envie emails de confirmação usando a de \"recent_purchasers\"   3. campanha vip:      * configurar uma automação separada ou jornada para a campanha vip usando a de \"vip_customers\"   explicação: esta automação segue um fluxo lógico de importação, processamento e segmentação de dados. primeiro, importa os arquivos do sftp para o marketing cloud. em seguida, processa os dados de clientes e transações, atualizando as des principais. depois, executa consultas sql para segmentar os clientes em três grupos distintos para diferentes campanhas. a automação é agendada para rodar diariamente após a chegada esperada dos arquivos. as jornadas e campanhas subsequentes são configuradas para usar as des de segmentação como fontes de entrada.     exercício 4: solução de problemas de entrega de email cenário: a empresa \"healthplus\" está enfrentando problemas com a entrega de emails para destinatários que usam gmail. os emails estão sendo entregues na pasta de promoções ou spam, em vez da caixa de entrada principal. a taxa de abertura caiu de 25% para 8% nas últimas semanas. a empresa envia principalmente newsletters mensais de saúde e bem-estar, além de promoções ocasionais de produtos.   tarefa: identifique as possíveis causas desse problema e descreva as etapas que você tomaria como marketing cloud administrator para diagnosticar e resolver a situação.   solução:   diagnóstico: possíveis causas   1. problemas de autenticação de email:      * spf, dkim ou dmarc não configurados ou configurados incorretamente    * alterações recentes nos registros dns   2. problemas de reputação:      * aumento nas taxas de spam complaints    * aumento nas taxas de bounce    * baixo engajamento (aberturas/cliques)    * ip ou domínio de envio com má reputação   3. problemas de conteúdo:      * uso excessivo de palavras que acionam filtros de spam    * desequilíbrio entre texto e imagens    * links para domínios com má reputação    * código html mal formado   4. problemas de lista:      * lista desatualizada com muitos endereços inativos    * falta de segmentação por engajamento    * aumento repentino no volume de envios   etapas para diagnóstico e resolução:   1. verificar relatórios e métricas:   * analisar relatórios de entregabilidade no marketing cloud * verificar taxas de bounce, spam complaints e unsubscribes * analisar tendências de engajamento (aberturas/cliques) por domínio * verificar se o problema é específico do gmail ou afeta outros domínios   2. verificar configuração de autenticação:   * verificar configuração de spf:    * no setup > security settings > sender authentication, verificar se o registro spf está configurado corretamente    * usar ferramentas como mxtoolbox para validar o registro spf * verificar configuração de dkim:    * no setup > security settings > domainkeys, verificar se a chave dkim está ativa e configurada corretamente no dns    * usar ferramentas de validação dkim * verificar configuração de dmarc:    * verificar se existe um registro dmarc no dns e se a política está configurada corretamente (p=none, p=quarantine, p=reject)    * analisar relatórios dmarc (se configurados) para identificar problemas   3. analisar reputação de envio:   * usar google postmaster tools para verificar a reputação do domínio e do ip junto ao gmail (taxas de spam, reputação, erros de entrega) * usar ferramentas como senderscore.org para verificar a reputação do ip * verificar se o ip de envio está em alguma blacklist pública (ex: spamhaus)   4. revisar conteúdo e práticas de envio:   * analisar o conteúdo dos emails recentes em busca de elementos que possam acionar filtros de spam (palavras-chave, formatação, links) * verificar a proporção texto/imagem * garantir que o processo de opt-out seja claro e funcional * revisar a frequência e o volume de envios   5. analisar qualidade da lista:   * verificar a origem das listas e garantir que sejam baseadas em opt-in * implementar segmentação por engajamento para enviar menos emails para assinantes inativos * realizar limpeza de lista para remover endereços inválidos e inativos   6. testar entregabilidade:   * usar ferramentas de teste de entregabilidade (ex: litmus, email on acid) para verificar como o email é renderizado e classificado por diferentes provedores, incluindo o gmail * enviar testes para contas de seed list em diferentes provedores   7. implementar melhorias:   * corrigir quaisquer problemas de autenticação encontrados * ajustar o conteúdo do email para evitar filtros de spam * implementar segmentação por engajamento * realizar limpeza de lista * se a reputação estiver muito baixa, considerar um plano de aquecimento de ip (ip warming)   8. monitorar resultados:   * acompanhar de perto as métricas de entregabilidade e engajamento após implementar as melhorias * continuar monitorando a reputação usando google postmaster tools e outras ferramentas   explicação: problemas de entrega no gmail geralmente estão relacionados à reputação do remetente, autenticação ou conteúdo. o administrador precisa seguir uma abordagem sistemática, começando pela verificação das configurações técnicas (autenticação), análise de métricas e reputação, revisão das práticas de conteúdo e lista, e implementação de melhorias. o google postmaster tools é uma ferramenta essencial para diagnosticar problemas específicos do gmail. a resolução pode exigir uma combinação de ajustes técnicos e mudanças nas práticas de marketing.     exercício 5: configuração de segurança (mfa e restrição de ip) cenário: a empresa \"securecorp\" precisa reforçar a segurança de sua conta marketing cloud. o diretor de segurança da informação solicitou que:   1. todos os usuários utilizem autenticação multifator (mfa) para login 2. o acesso à interface do marketing cloud seja restrito apenas aos ips da rede corporativa e da vpn   tarefa: descreva os passos que você tomaria como marketing cloud administrator para implementar essas medidas de segurança.   solução:   passo 1: implementação da autenticação multifator (mfa)   1. comunicação:      * comunicar a todos os usuários sobre a obrigatoriedade da mfa, explicando o motivo (segurança) e o processo de configuração    * fornecer documentação ou guias sobre como instalar e usar aplicativos autenticadores (ex: salesforce authenticator, google authenticator, authy)    * definir um prazo para a configuração   2. habilitar mfa na conta:      * ir para setup > security > multi-factor authentication    * habilitar a opção \"require multi-factor authentication for all logins to this tenant\" (ou similar)    * nota: a salesforce tem tornado a mfa obrigatória, então esta opção pode já estar habilitada ou ser gerenciada em um nível superior pela salesforce.   3. verificar status dos usuários:      * monitorar quais usuários já configuraram a mfa    * ajudar usuários com dificuldades na configuração   4. gerenciar métodos de verificação:      * orientar os usuários sobre como adicionar múltiplos métodos de verificação (aplicativo autenticador, chave de segurança u2f) como backup    * gerenciar solicitações de redefinição de mfa em caso de perda de dispositivo (processo seguro)   passo 2: implementação da restrição de login por ip (ip whitelisting)   1. identificar faixas de ip:      * trabalhar com a equipe de ti/redes para obter a lista completa e precisa das faixas de endereços ip públicos utilizadas pela rede corporativa e pela vpn    * garantir que ips estáticos sejam usados, ou que as faixas sejam estáveis   2. configurar ip whitelist:      * ir para setup > security > login ip allowlist (ou ip restrictions)    * clicar em \"new\" ou \"add ip range\"    * inserir cada faixa de ip identificada no formato cidr (ex: 203.0.113.0/24) ou como ips individuais/intervalos    * adicionar uma descrição para cada entrada (ex: \"escritório principal\", \"vpn corporativa\")   3. habilitar a restrição:      * marcar a opção \"enable ip allowlisting\" ou \"enforce login ip ranges on every login\"    * cuidado: antes de habilitar, certifique-se absolutamente de que seu próprio ip (ou um ip de administrador de backup) está incluído na lista para evitar ficar bloqueado fora da conta.   4. testar o acesso:      * pedir a usuários em diferentes locais (dentro da rede, via vpn, fora da rede) para tentarem fazer login    * verificar se usuários dentro das faixas permitidas conseguem acessar e se usuários fora das faixas são bloqueados   5. manutenção:      * manter a lista de ips atualizada sempre que houver mudanças na infraestrutura de rede da empresa    * revisar periodicamente a lista para garantir sua precisão   considerações adicionais:   * api users: verificar se as restrições de ip também se aplicam a usuários de api e, se necessário, adicionar os ips dos servidores que farão as chamadas de api à lista. * acesso de emergência: ter um plano para acesso de administrador em caso de emergência, caso os ips permitidos fiquem inacessíveis (pode envolver contato com o suporte salesforce). * impacto no usuário: comunicar claramente as restrições e fornecer suporte para usuários que trabalham remotamente ou viajam, garantindo que eles saibam como usar a vpn corporativa para acessar o marketing cloud.   explicação: a implementação de mfa e restrição de ip são medidas de segurança fundamentais. a mfa adiciona uma camada extra de verificação na autenticação, enquanto a restrição de ip limita de onde os usuários podem acessar a plataforma. o administrador precisa planejar cuidadosamente a implementação, comunicar as mudanças aos usuários, configurar as opções corretamente no setup e testar rigorosamente para garantir que a segurança seja reforçada sem bloquear indevidamente o acesso legítimo.     4.3. estudo de caso - marketing cloud administrator: migração e consolidação de plataformas contexto da empresa empresa: multitech solutions setor: tecnologia e serviços b2b tamanho: médio porte (800 funcionários, 4 escritórios regionais)   a multitech solutions é uma empresa de tecnologia que oferece soluções de software e serviços de consultoria para o setor corporativo. após adquirir duas empresas menores nos últimos 18 meses, a multitech se viu operando três plataformas diferentes de marketing digital:   1. plataforma a: sistema legado usado pela multitech (esp básico) 2. plataforma b: mailchimp usado pela primeira empresa adquirida 3. plataforma c: hubspot usado pela segunda empresa adquirida   a diretoria decidiu consolidar todas as operações de marketing digital no salesforce marketing cloud para unificar a comunicação com clientes, melhorar a eficiência operacional e aproveitar recursos avançados de automação e personalização. desafio como marketing cloud administrator, você foi contratado para liderar este projeto de migração e consolidação. os principais desafios incluem:   1. migração de dados: transferir dados de clientes, histórico de comunicação e ativos de marketing de três plataformas diferentes 2. estruturação da conta: definir a arquitetura ideal de business units e permissões 3. integração com crm: conectar o marketing cloud com o salesforce sales cloud existente 4. treinamento de equipes: capacitar três equipes de marketing com diferentes níveis de experiência 5. continuidade operacional: garantir que campanhas em andamento não sejam interrompidas durante a transição análise da situação avaliação das plataformas existentes plataforma \tdados \tativos \tautomações \tintegrações \tplataforma a"
  },
  {
    "id": "120.000-contatos",
    "title": "120.000 contatos",
    "text": ""
  },
  {
    "id": "15-listas",
    "title": "15 listas",
    "text": "  dados básicos de perfil"
  },
  {
    "id": "45-templates",
    "title": "45 templates",
    "text": ""
  },
  {
    "id": "200-emails",
    "title": "200 emails",
    "text": " "
  },
  {
    "id": "10-landing-pages",
    "title": "10 landing pages",
    "text": "\tautomações básicas   sem jornadas complexas \tintegração básica com crm   api para sistema de eventos \tmailchimp"
  },
  {
    "id": "35.000-contatos",
    "title": "35.000 contatos",
    "text": ""
  },
  {
    "id": "8-segmentos",
    "title": "8 segmentos",
    "text": "  dados de engajamento"
  },
  {
    "id": "20-templates",
    "title": "20 templates",
    "text": ""
  },
  {
    "id": "150-emails",
    "title": "150 emails",
    "text": " "
  },
  {
    "id": "5-landing-pages",
    "title": "5 landing pages",
    "text": "\tautomações de drip   fluxos de boas-vindas \tintegração com wordpress   zapier para outras ferramentas \thubspot"
  },
  {
    "id": "25.000-contatos",
    "title": "25.000 contatos",
    "text": ""
  },
  {
    "id": "12-listas",
    "title": "12 listas",
    "text": "  dados de comportamento"
  },
  {
    "id": "15-templates",
    "title": "15 templates",
    "text": ""
  },
  {
    "id": "100-emails",
    "title": "100 emails",
    "text": " "
  },
  {
    "id": "20-landing-pages",
    "title": "20 landing pages",
    "text": "\tworkflows avançados   nurturing de leads \tintegração com crm próprio   conexão com sistema de eventos \tavaliação da equipe * equipe principal: 5 pessoas, experiência básica com automação de marketing * equipe da aquisição 1: 3 pessoas, especialistas em mailchimp * equipe da aquisição 2: 3 pessoas, especialistas em hubspot e inbound marketing requisitos de negócio 1. segmentação por unidade de negócio: separar comunicações por divisão (software, consultoria, treinamento) 2. visão unificada do cliente: consolidar todos os dados de interação em um único perfil 3. automação avançada: implementar jornadas de cliente baseadas em comportamento 4. relatórios consolidados: criar dashboards unificados para todas as campanhas 5. conformidade com lgpd: garantir que todos os processos estejam em conformidade estratégia de implementação 1. arquitetura da conta marketing cloud estrutura de business units:   multitech solutions (parent bu)   ├── software division (child bu)   ├── consulting division (child bu)   └── training division (child bu)   configuração no setup:   1. criação das business units:   // exemplo de configuração via api (para documentação)   post /v1/businessunits   {     \"name\": \"software division\",     \"parentid\": \"parent_bu_mid_here\",     \"description\": \"business unit for software division marketing activities\",     \"timezone\": \"america/sao_paulo\",     \"categoryid\": 12345   }   2. estrutura de pastas compartilhadas:      * pasta shared_templates na parent bu com permissões de visualização para todas as child bus    * pastas específicas para cada divisão nas respectivas child bus 2. estratégia de migração de dados plano de migração:   1. preparação das data extensions:   contact_master (de principal):   -- script para criar a de principal via api   {     \"name\": \"contact_master\",     \"customerkey\": \"contact_master\",     \"description\": \"master contact record for all business units\",     \"fields\": [       {         \"name\": \"contactid\",         \"type\": \"text\",         \"length\": 50,         \"isprimarykey\": true,         \"isrequired\": true       },       {         \"name\": \"email\",         \"type\": \"emailaddress\",         \"length\": 254,         \"isrequired\": true       },       {         \"name\": \"firstname\",         \"type\": \"text\",         \"length\": 100       },       {         \"name\": \"lastname\",         \"type\": \"text\",         \"length\": 100       },       {         \"name\": \"company\",         \"type\": \"text\",         \"length\": 200       },       {         \"name\": \"division\",         \"type\": \"text\",         \"length\": 50       },       {         \"name\": \"sourcesystem\",         \"type\": \"text\",         \"length\": 50       },       {         \"name\": \"optinstatus\",         \"type\": \"boolean\",         \"defaultvalue\": false       },       {         \"name\": \"optindate\",         \"type\": \"date\"       },       {         \"name\": \"lastmodified\",         \"type\": \"date\"       }     ]   }   2. processo de etl:      * extração de dados das plataformas de origem via api    * transformação e normalização em formato intermediário    * deduplicação baseada em email e outros identificadores    * carga em lotes para o marketing cloud   exemplo de script de deduplicação:   -- consulta sql para identificar duplicatas   select        email,       count(*) as emailcount,       string_agg(sourcesystem, \", \") as sources,       max(lastmodified) as mostrecentupdate   from        staging_all_contacts   group by        email   having        count(*) > 1   3. mapeamento de subscriber key:      * definição: usar o formato source_system-original_id como subscriber key    * exemplo: hubspot-123456 ou mailchimp-abc123    * criação de tabela de mapeamento para referência futura 3. configuração de permissões e segurança estrutura de funções (roles):   1. global admin:      * acesso completo a todas as bus    * membros: administradores de sistema, gerente de marketing digital   2. division admin:      * acesso administrativo à respectiva child bu    * acesso de visualização à parent bu    * membros: gerentes de marketing de cada divisão   3. marketing specialist:      * acesso operacional à respectiva child bu    * sem acesso administrativo    * membros: especialistas de marketing de cada divisão   4. content creator:      * acesso apenas ao content builder e cloudpages    * sem permissões de envio    * membros: designers e redatores   implementação de segurança:   1. multi-factor authentication:      * ativação obrigatória para todos os usuários    * configuração no setup > security settings > authentication   2. ip allowlisting:      * restrição de acesso apenas a ips corporativos    * configuração no setup > security settings > ip allowlist   3. field-level encryption:      * criptografia para campos sensíveis (ex: números de telefone)    * configuração no setup > platform tools > data management 4. integração com sales cloud configuração do marketing cloud connect:   1. instalação do pacote:      * instalação do pacote marketing cloud connect no sales cloud    * configuração de usuário integrado com permissões adequadas   2. configuração de sincronização:   // configuração de synchronized data extension   {     \"name\": \"sync_accounts\",     \"customerkey\": \"sync_accounts\",     \"description\": \"synchronized accounts from sales cloud\",     \"fields\": [       // campos mapeados do objeto account     ],     \"categoryid\": 12345,     \"issendable\": true,     \"sendabledataextensionfield\": {       \"name\": \"accountid\"     },     \"sendablesubscriberfield\": {       \"name\": \"subscriber key\"     }   }   3. mapeamento de objetos:      * account, contact, lead, opportunity    * campos personalizados relevantes para marketing   4. automação de sincronização:      * configuração de frequência de sincronização    * monitoramento de erros de sincronização 5. migração de ativos e automações processo de migração:   1. templates e emails:      * recriação de templates principais no content builder    * adaptação de emails existentes para novos templates    * uso de ampscript para personalização avançada   exemplo de template adaptado:   %%[   /* definição de variáveis para personalização */   var @firstname, @companyname, @productinterest   set @firstname = attributevalue(\"firstname\")   set @companyname = attributevalue(\"company\")   set @productinterest = attributevalue(\"productinterest\")   /* lógica para conteúdo condicional */   if empty(@firstname) then     set @firstname = \"prezado cliente\"   endif   if @productinterest == \"software\" then     set @ctalink = \"https://multitech.com/software-demo\"     set @ctatext = \"agendar demo de software\"   elseif @productinterest == \"consulting\" then     set @ctalink = \"https://multitech.com/consulting-assessment\"     set @ctatext = \"solicitar avaliação gratuita\"   else     set @ctalink = \"https://multitech.com/solutions\"     set @ctatext = \"conhecer nossas soluções\"   endif   ]%%   <h1>olá %%=v(@firstname)=%%!</h1>   <p>obrigado por seu interesse nas soluções da multitech.</p>   <!-- conteúdo condicional baseado no interesse do produto -->   %%[ if @productinterest == \"software\" then ]%%     <p>nossos especialistas em software estão prontos para mostrar como nossas soluções podem otimizar os processos da %%=v(@companyname)=%%.</p>   %%[ elseif @productinterest == \"consulting\" then ]%%     <p>nossa equipe de consultoria tem ampla experiência em ajudar empresas como a %%=v(@companyname)=%% a alcançar seus objetivos de negócio.</p>   %%[ else ]%%     <p>a multitech oferece diversas soluções que podem ser personalizadas para as necessidades da %%=v(@companyname)=%%.</p>   %%[ endif ]%%   <a href=\"%%=redirectto(@ctalink)=%%\" style=\"background-color:#0078d4; color:white; padding:10px 20px; text-decoration:none; border-radius:4px; display:inline-block; margin-top:15px;\">%%=v(@ctatext)=%%</a>   2. automações e jornadas:      * análise das automações existentes nas plataformas de origem    * redesenho e otimização para journey builder e automation studio    * implementação em fases, começando pelas mais críticas   exemplo de jornada de boas-vindas:      * entrada: novo contato adicionado ao crm    * email 1: boas-vindas e introdução (dia 0)    * espera: 2 dias    * email 2: recursos e casos de uso (dia 2)    * decisão split: baseado em engajamento       * engajou: email 3a (conteúdo aprofundado)       * não engajou: email 3b (reconexão)    * espera: 4 dias    * email 4: convite para webinar/demo 6. plano de treinamento e capacitação programa de treinamento:   1. fase 1: fundamentos do marketing cloud      * sessões de 2 horas, 3x por semana, 2 semanas    * tópicos: navegação, email studio, content builder, data extensions   2. fase 2: treinamento avançado      * sessões de 3 horas, 2x por semana, 3 semanas    * tópicos: journey builder, automation studio, sql, ampscript básico   3. fase 3: especialização      * workshops práticos de 4 horas, 1x por semana, 4 semanas    * tópicos: segmentação avançada, personalização, relatórios, otimização   documentação e recursos:   * criação de wiki interno com procedimentos e melhores práticas * biblioteca de snippets de código para tarefas comuns * fluxogramas de processos para operações principais implementação e cronograma fase 1: preparação e planejamento (semanas 1-4) * auditoria detalhada das plataformas existentes * definição da arquitetura da conta * criação de business units e configuração inicial fase 2: configuração e integração (semanas 5-8) * configuração de usuários e permissões * integração com sales cloud * criação de data extensions principais fase 3: migração de dados (semanas 9-12) * extração e transformação de dados * deduplicação e limpeza * importação para marketing cloud fase 4: migração de ativos (semanas 13-16) * recriação de templates * adaptação de emails * configuração de cloudpages fase 5: automações e jornadas (semanas 17-20) * implementação de automações críticas * criação de jornadas principais * testes e otimização fase 6: treinamento e transição (semanas 21-24) * execução do programa de treinamento * transição gradual das operações * desativação das plataformas antigas desafios e soluções desafio 1: deduplicação de contatos problema: muitos contatos existiam em múltiplas plataformas com dados diferentes.   solução:   1. criação de algoritmo de pontuação para identificar correspondências:   -- pseudocódigo para algoritmo de pontuação   select        a.email as email_a,       b.email as email_b,       case            when lower(a.email) = lower(b.email) then 100           else 0       end +       case            when lower(a.firstname) = lower(b.firstname) then 25           when similarity(a.firstname, b.firstname) > 0.8 then 15           else 0       end +       case            when lower(a.lastname) = lower(b.lastname) then 25           when similarity(a.lastname, b.lastname) > 0.8 then 15           else 0       end +       case            when lower(a.company) = lower(b.company) then 25           when similarity(a.company, b.company) > 0.8 then 15           else 0       end as matchscore   from        platform_a_contacts a   cross join        platform_b_contacts b   where        /* filtros para reduzir o número de comparações */       lower(a.email) = lower(b.email) or       (lower(a.firstname) = lower(b.firstname) and lower(a.lastname) = lower(b.lastname))   having        matchscore >= 75   2. processo de mesclagem de registros:      * priorização de dados mais recentes    * preservação de histórico de engajamento    * documentação de decisões de mesclagem desafio 2: manutenção da entregabilidade problema: risco de queda na entregabilidade durante a transição para novos ips de envio.   solução:   1. estratégia de ip warming:      * início com volumes baixos (10% da base)    * aumento gradual ao longo de 6 semanas    * priorização de assinantes mais engajados no início   2. configuração de autenticação:   # exemplo de registro spf   v=spf1 include:_spf.salesforce.com include:_spf.multitech.com ~all   # exemplo de registro dkim   selector._domainkey.multitech.com txt v=dkim1; k=rsa; p=migfma0gcsqgsib3dqebaquaa4gnadcbiqkbgqc...   3. monitoramento intensivo:      * verificações diárias de métricas de entregabilidade    * ajustes de volume baseados em feedback de isps    * uso de ferramentas como return path e google postmaster tools desafio 3: resistência à mudança problema: resistência das equipes adquiridas em abandonar suas plataformas familiares.   solução:   1. programa de champions:      * identificação de usuários-chave em cada equipe    * treinamento avançado e certificação    * responsabilidade por ajudar colegas na transição   2. demonstrações de valor:      * workshops mostrando recursos não disponíveis nas plataformas antigas    * criação de casos de uso específicos para cada equipe    * métricas comparativas de desempenho resultados e métricas de sucesso resultados técnicos 1. consolidação de dados:      * 180.000 contatos migrados e deduplicados    * redução de 15% na base total devido à limpeza    * criação de modelo de dados unificado no contact builder   2. integração:      * marketing cloud connect configurado e sincronizando dados com sales cloud    * integração com sistema de eventos via api estabelecida   3. migração de ativos:      * 80% dos templates e emails críticos recriados    * 15 jornadas principais implementadas no journey builder resultados de negócio (após 6 meses) 1. eficiência operacional:      * redução de 30% no tempo gasto para criar e executar campanhas    * eliminação de custos de manutenção das plataformas antigas   2. engajamento e conversão:      * aumento de 25% na taxa de abertura média    * aumento de 40% na taxa de clique média    * aumento de 15% na taxa de conversão de leads qualificados   3. capacitação da equipe:      * 85% da equipe de marketing completou o treinamento básico    * 50% completou o treinamento avançado    * adoção positiva das novas ferramentas e processos conclusão a migração e consolidação de múltiplas plataformas de marketing para o salesforce marketing cloud foi um projeto complexo, mas bem-sucedido. o papel do marketing cloud administrator foi crucial em todas as fases, desde o planejamento da arquitetura e migração de dados até a configuração de segurança, integração com crm e gerenciamento da transição. a abordagem estruturada, combinada com soluções técnicas para desafios como deduplicação e ip warming, e estratégias de gerenciamento de mudanças, garantiu uma transição suave e a realização dos benefícios esperados da plataforma unificada.  "
  },
  {
    "id": "preamble",
    "title": "Preamble",
    "text": "salesforce sales cloud o salesforce sales cloud é a plataforma de automação de força de vendas (sfa) líder de mercado, projetada para ajudar empresas a gerenciar e automatizar seus processos de vendas, desde a geração de leads até o fechamento de negócios e o pós-venda. ele oferece uma visão 360 graus do cliente, permitindo que as equipes de vendas trabalhem de forma mais eficiente, fechem mais negócios e construam relacionamentos duradouros com os clientes. propósito e importância do sales cloud: no cenário de vendas atual, que é cada vez mais competitivo e digital, o sales cloud se torna uma ferramenta indispensável. ele permite que as empresas:   * gerenciamento abrangente de leads e oportunidades: acompanhe leads desde a sua origem, qualifique-os e gerencie o pipeline de vendas de forma eficaz, identificando as oportunidades mais promissoras. * automação de vendas: automatize tarefas repetitivas, como entrada de dados, agendamento de follow-ups e criação de relatórios, liberando tempo para os vendedores se concentrarem no que realmente importa: vender. * visão 360 do cliente: centralize todas as informações do cliente (interações, histórico de compras, comunicações) em um único local, proporcionando uma visão completa para a equipe de vendas. * previsão de vendas precisa: utilize dados históricos e inteligência artificial para gerar previsões de vendas mais precisas, auxiliando na tomada de decisões estratégicas. * colaboração e produtividade: facilite a colaboração entre os membros da equipe de vendas, compartilhe informações e melhores práticas, e aumente a produtividade geral. * mobilidade: acesse informações e gerencie atividades de vendas de qualquer lugar, a qualquer hora, através de dispositivos móveis. * inteligência artificial (einstein for sales cloud): aproveite o poder da ia para obter insights preditivos sobre leads e oportunidades, recomendações de próximas ações e automação inteligente para otimizar o processo de vendas. * integração com outras clouds: como parte do salesforce customer 360, o sales cloud se integra perfeitamente com outras clouds da salesforce (marketing cloud, service cloud, etc.), garantindo uma experiência unificada para o cliente e para as equipes internas. principais funcionalidades do sales cloud: o sales cloud oferece um conjunto robusto de funcionalidades para otimizar o ciclo de vendas:   * gestão de leads: capture, qualifique e distribua leads de forma eficiente, garantindo que os leads certos cheguem aos vendedores certos no momento certo. * gestão de contas e contatos: mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades. * gestão de oportunidades: acompanhe o progresso de cada oportunidade de venda, desde a prospecção até o fechamento, com estágios de vendas personalizáveis, produtos, cotações e previsões. * previsão de vendas: ferramentas para criar previsões de vendas precisas, permitindo que as equipes e a gerência planejem e tomem decisões baseadas em dados. * automação de fluxo de trabalho e aprovações: automatize processos de vendas, como aprovações de descontos, criação de tarefas e envio de e-mails, reduzindo erros e acelerando o ciclo de vendas. * relatórios e dashboards: crie relatórios e dashboards personalizados para visualizar o desempenho de vendas, identificar tendências, analisar o pipeline e tomar decisões informadas. * salesforce mobile app: acesse o sales cloud de qualquer dispositivo móvel, permitindo que os vendedores gerenciem suas atividades em campo. * einstein for sales cloud: recursos de inteligência artificial que fornecem insights preditivos, como pontuação de leads e oportunidades, análise de atividades e recomendações de próximas ações. * salesforce engage: ferramentas para que os vendedores possam enviar e-mails personalizados e rastrear o engajamento dos leads. * salesforce cpq (configure, price, quote): (opcional, mas frequentemente integrado) ajuda a automatizar o processo de cotação, precificação e configuração de produtos complexos. * integração com o slack: permite que as equipes de vendas colaborem em tempo real, compartilhem atualizações e fechem negócios mais rapidamente. sales cloud no ecossistema salesforce customer 360: o sales cloud é um pilar fundamental do salesforce customer 360, a visão da salesforce de uma plataforma unificada que oferece uma visão completa do cliente. a integração do sales cloud com outras clouds é crucial para uma experiência de cliente coesa:   * sales cloud e marketing cloud: leads gerados no marketing cloud podem ser automaticamente transferidos para o sales cloud para acompanhamento pela equipe de vendas. as campanhas de marketing podem ser personalizadas com base no progresso das oportunidades de vendas. * sales cloud e service cloud: quando um cliente faz uma compra através do sales cloud, as informações podem ser acessadas pelo service cloud para fornecer suporte ao cliente proativo e personalizado. casos de suporte podem ser criados a partir de oportunidades de vendas, e o histórico de serviço pode influenciar as interações de vendas. * sales cloud e financial services cloud: para instituições financeiras, o sales cloud se integra ao financial services cloud para gerenciar relacionamentos com clientes, oportunidades de vendas de produtos financeiros e conformidade regulatória de forma mais eficiente.   essa integração permite que as empresas que utilizam o salesforce customer 360 ofereçam uma experiência de cliente fluida e consistente em todos os pontos de contato, desde o primeiro contato de marketing até o suporte pós-venda. salesforce service cloud o salesforce service cloud é uma plataforma de atendimento ao cliente que permite às empresas oferecerem suporte excepcional e personalizado em diversos canais. ele centraliza todas as interações com o cliente, capacitando os agentes a resolverem problemas de forma mais rápida e eficiente, melhorando a satisfação e a fidelidade do cliente. propósito e importância do service cloud: no cenário atual, onde a experiência do cliente é um diferencial competitivo, o service cloud é fundamental. ele permite que as empresas:   * centralizem o atendimento: unifiquem todas as interações com o cliente (telefone, e-mail, chat, redes sociais, autoatendimento) em uma única plataforma, proporcionando uma visão completa do histórico do cliente. * otimizem a resolução de casos: gerenciem casos de suporte de forma eficiente, desde a criação até a resolução, com ferramentas para roteamento inteligente, automação e colaboração entre equipes. * melhorem a produtividade do agente: forneçam aos agentes as ferramentas e informações necessárias para atenderem os clientes de forma mais rápida e eficaz, reduzindo o tempo médio de atendimento e aumentando a satisfação do agente. * ofereçam autoatendimento: capacitem os clientes a encontrarem respostas para suas perguntas e resolverem problemas por conta própria através de portais de autoatendimento, bases de conhecimento e comunidades. * personalizem o suporte: utilizem os dados do cliente para oferecer um atendimento personalizado e proativo, antecipando necessidades e resolvendo problemas antes mesmo que eles surjam. * utilizem inteligência artificial (einstein for service cloud): aproveitem a ia para automatizar tarefas repetitivas, fornecer recomendações de artigos e respostas, e prever a satisfação do cliente. * integração com outras clouds: como parte do salesforce customer 360, o service cloud se integra perfeitamente com outras clouds da salesforce, garantindo uma experiência de cliente consistente em todos os pontos de contato. principais funcionalidades do service cloud: o service cloud oferece uma ampla gama de funcionalidades para otimizar o atendimento ao cliente:   * gestão de casos: crie, gerencie e resolva casos de suporte de forma eficiente, com rastreamento de status, priorização e escalonamento. * omni-channel: direcione automaticamente os casos para o agente mais qualificado, independentemente do canal de comunicação, garantindo um atendimento rápido e eficiente. * base de conhecimento (knowledge): crie e gerencie uma base de conhecimento centralizada com artigos, faqs e guias de solução de problemas, permitindo que agentes e clientes encontrem respostas rapidamente. * chat e messaging: ofereça suporte em tempo real através de chat ao vivo e integre-se com plataformas de mensagens populares como whatsapp e facebook messenger. * telefonia (service cloud voice): integre sistemas de telefonia diretamente ao service cloud, permitindo que os agentes gerenciem chamadas, registrem interações e acessem informações do cliente em um único local. * comunidades (experience cloud): crie portais de autoatendimento e comunidades online onde os clientes podem encontrar respostas, colaborar com outros usuários e interagir com a empresa. * automação de fluxo de trabalho: automatize tarefas repetitivas e processos de atendimento, como o envio de e-mails de confirmação, atualizações de status de casos e escalonamento. * relatórios e dashboards: monitore o desempenho do atendimento ao cliente com relatórios e dashboards personalizáveis, analisando métricas como tempo médio de resolução, satisfação do cliente e volume de casos. * einstein for service cloud: utilize a ia para recursos como einstein bots (chatbots para autoatendimento), einstein case classification (classificação automática de casos) e einstein article recommendations (recomendações de artigos para agentes). * field service (field service lightning): (opcional, mas frequentemente integrado) gerencie equipes de serviço de campo, agendamento de visitas, gerenciamento de ativos e estoque. service cloud no ecossistema salesforce customer 360: o service cloud é um componente vital do salesforce customer 360, garantindo que as empresas possam oferecer uma experiência de serviço excepcional que complementa as atividades de vendas e marketing:   * service cloud e sales cloud: agentes de serviço podem acessar o histórico de compras e interações de vendas para fornecer um suporte mais contextualizado. casos de suporte podem ser convertidos em oportunidades de vendas, e a equipe de vendas pode ser notificada sobre problemas de clientes para um acompanhamento proativo. * service cloud e marketing cloud: o histórico de serviço pode ser usado para personalizar campanhas de marketing, segmentar clientes com base em suas necessidades de suporte e enviar comunicações relevantes. o marketing cloud pode ser usado para enviar pesquisas de satisfação pós-atendimento. * service cloud e financial services cloud: para instituições financeiras, o service cloud se integra ao financial services cloud para gerenciar consultas de clientes, solicitações de serviço e problemas relacionados a produtos financeiros, garantindo conformidade e um atendimento especializado.   essa integração permite que as empresas que utilizam o salesforce customer 360 ofereçam uma experiência de cliente fluida e consistente em todos os pontos de contato, desde o primeiro contato de marketing até o suporte pós-venda, criando lealdade e promovendo o crescimento do negócio. salesforce financial services cloud o salesforce financial services cloud (fsc) é uma plataforma crm construída especificamente para as necessidades do setor de serviços financeiros, incluindo bancos de varejo e comerciais, gestão de patrimônio e seguros. ele estende as funcionalidades do sales cloud e service cloud com modelos de dados e processos pré-construídos para atender aos requisitos únicos de instituições financeiras, permitindo uma visão 360 graus do cliente financeiro e otimizando o engajamento. propósito e importância do financial services cloud: no setor financeiro, a confiança, a personalização e a conformidade regulatória são cruciais. o fsc aborda esses desafios ao permitir que as instituições:   * visão 360 do cliente financeiro: unifique dados de clientes e famílias de diversas fontes (sistemas bancários, de investimento, de seguros) para criar um perfil financeiro completo, incluindo relacionamentos, ativos, passivos, metas e interações. * gerenciamento de relacionamento aprimorado: capacite gerentes de relacionamento, consultores financeiros e agentes de seguros com ferramentas para gerenciar seus clientes e prospects de forma mais eficaz, identificar oportunidades de cross-sell e up-sell, e fornecer aconselhamento personalizado. * otimização de processos específicos do setor: automatize e otimize processos como abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e planejamento financeiro, com fluxos de trabalho e modelos de dados adaptados. * personalização e engajamento proativo: utilize insights baseados em dados para personalizar comunicações, ofertas de produtos e serviços, e engajar proativamente com os clientes em momentos-chave de suas vidas financeiras. * conformidade e segurança: ajude as instituições a manterem a conformidade com regulamentações do setor através de trilhas de auditoria, gerenciamento de consentimento e segurança de dados robusta. * colaboração eficiente: facilite a colaboração entre diferentes departamentos (vendas, serviço, operações, conformidade) para garantir uma experiência de cliente fluida e consistente. * inteligência artificial (einstein for fsc): aplique a ia para prever necessidades dos clientes, identificar riscos, recomendar produtos e automatizar tarefas, melhorando a eficiência e a tomada de decisões. * integração com sistemas legados: conecte-se a sistemas bancários, de investimento e de seguros existentes para consolidar dados e automatizar processos, sem a necessidade de substituir infraestruturas críticas. principais funcionalidades do financial services cloud: o fsc estende as capacidades do salesforce crm com funcionalidades específicas para o setor financeiro:   * modelos de dados específicos do setor: inclui objetos e campos pré-construídos para gerenciar contas financeiras (depósitos, empréstimos, investimentos, seguros), ativos e passivos, relacionamentos de família e grupo, e metas financeiras. * centro de relacionamento acionável (actionable relationship center - arc): visualize graficamente as relações entre clientes, membros da família, contas e outros contatos, facilitando a identificação de oportunidades e a compreensão da rede de um cliente. * gerenciamento de metas financeiras: ajude os clientes a definir e acompanhar suas metas financeiras (ex: aposentadoria, compra de casa, educação dos filhos) e forneça aconselhamento para alcançá-las. * console do agente de serviço financeiro: uma interface unificada para agentes de atendimento ao cliente, fornecendo acesso rápido a todas as informações relevantes do cliente financeiro, histórico de interações e ferramentas de serviço. * automação de processos de negócios: fluxos de trabalho e automações pré-configurados para processos comuns do setor financeiro, como integração de novos clientes, solicitações de empréstimos e gerenciamento de sinistros. * gerenciamento de referências: ferramentas para rastrear e gerenciar referências internas e externas, garantindo que as oportunidades de negócios sejam encaminhadas e acompanhadas adequadamente. * einstein for financial services cloud: oferece insights preditivos sobre a probabilidade de um cliente precisar de um novo produto, risco de churn, e recomendações personalizadas para gerentes de relacionamento. * gerenciamento de conformidade e auditoria: ajuda a garantir que as interações e processos estejam em conformidade com as regulamentações do setor, com registros detalhados e trilhas de auditoria. * integrações com sistemas core: apis e conectores para integrar o fsc com sistemas bancários, de investimento e de seguros existentes, permitindo a troca de dados em tempo real. financial services cloud no ecossistema salesforce customer 360: o fsc é uma camada especializada construída sobre o sales cloud e service cloud, aproveitando a força do customer 360 para oferecer uma solução completa para o setor financeiro:   * fsc e sales cloud: o fsc aprimora o sales cloud com modelos de dados financeiros e processos de vendas específicos para produtos e serviços financeiros, permitindo que os gerentes de relacionamento gerenciem oportunidades de vendas de forma mais eficaz no contexto financeiro. * fsc e service cloud: o fsc estende o service cloud com funcionalidades para gerenciar consultas de clientes, solicitações de serviço e problemas relacionados a produtos financeiros, garantindo que os agentes de serviço tenham todas as informações necessárias para um atendimento especializado e em conformidade. * fsc e marketing cloud: os dados ricos do cliente financeiro no fsc podem ser utilizados pelo marketing cloud para criar campanhas de marketing altamente segmentadas e personalizadas, oferecendo produtos e serviços financeiros relevantes para as necessidades e metas de cada cliente.   essa integração profunda dentro do ecossistema salesforce permite que as instituições financeiras ofereçam uma experiência de cliente unificada, personalizada e eficiente, desde o marketing e vendas até o serviço e o gerenciamento de patrimônio, impulsionando a lealdade e o crescimento no competitivo. o ecossistema salesforce customer 360: uma visão unificada do cliente o salesforce customer 360 representa a visão da salesforce de uma plataforma integrada que oferece uma visão completa e unificada de cada cliente. em um mundo onde as expectativas dos clientes são cada vez maiores e a jornada do cliente se estende por múltiplos pontos de contato, ter uma compreensão holística do cliente é fundamental para o sucesso dos negócios. o customer 360 não é um produto único, mas sim uma arquitetura que conecta as diversas clouds da salesforce – como sales cloud, service cloud, marketing cloud e financial services cloud – permitindo que as empresas colaborem, automatizem processos e personalizem interações em todas as etapas do ciclo de vida do cliente. a importância da visão 360 graus do cliente: tradicionalmente, os dados dos clientes ficavam isolados em diferentes departamentos e sistemas, criando silos de informação que dificultavam a colaboração e a entrega de experiências consistentes. o customer 360 resolve esse problema ao:   * unificar dados: coletar e consolidar dados de vendas, serviço, marketing, comércio e outras fontes em um perfil de cliente único e acessível. * personalizar experiências: utilizar essa visão unificada para personalizar cada interação, desde o primeiro contato de marketing até o suporte pós-venda, tornando as comunicações mais relevantes e eficazes. * melhorar a colaboração: quebrar barreiras entre departamentos, permitindo que as equipes de vendas, serviço e marketing compartilhem informações e trabalhem juntas para atender às necessidades do cliente. * otimizar processos: automatizar fluxos de trabalho complexos que abrangem múltiplas funções, resultando em maior eficiência e redução de custos. * impulsionar a inovação: fornecer uma base de dados rica e insights acionáveis que permitem às empresas inovar em produtos, serviços e estratégias de engajamento. como o customer 360 conecta as clouds: cada cloud da salesforce é especializada em uma área específica do relacionamento com o cliente, mas é a sua interconexão que libera todo o potencial do customer 360:   * sales cloud: gerencia o ciclo de vendas, desde a prospecção até o fechamento. no customer 360, ele se beneficia de leads qualificados pelo marketing cloud e de insights de serviço do service cloud. * service cloud: oferece suporte ao cliente em diversos canais. com o customer 360, os agentes de serviço têm acesso ao histórico de compras e interações de vendas, permitindo um atendimento mais contextualizado. * marketing cloud: permite a criação e execução de campanhas de marketing personalizadas. integrado ao customer 360, ele utiliza dados de vendas e serviço para segmentar audiências e personalizar mensagens de forma mais eficaz. * financial services cloud: adapta o crm para as necessidades específicas do setor financeiro. no customer 360, ele unifica dados financeiros com informações de vendas e serviço para uma visão completa do cliente bancário, de investimento ou de seguros.   ao trabalhar em conjunto, essas clouds fornecem uma plataforma poderosa que permite às empresas construir relacionamentos mais fortes e duradouros com seus clientes, impulsionando o crescimento e a lealdade. o restante deste guia aprofundará cada uma dessas clouds, detalhando suas funcionalidades e como elas se encaixam na estratégia customer 360. 2. guia de aprendizado progressivo do sales cloud esta seção oferece um guia progressivo e aprofundado para aprender o salesforce sales cloud, começando pelos conceitos fundamentais e avançando para tópicos mais complexos, com foco em como a plataforma capacita equipes de vendas a serem mais eficientes e eficazes. 2.1. nível iniciante: fundamentos e primeiros passos no sales cloud objetivo: familiarizar-se com a interface do sales cloud, seus objetos padrão e o fluxo básico de vendas, desde o lead até a oportunidade. conceitos fundamentais essenciais: * lead: um indivíduo ou empresa que demonstrou interesse em seus produtos ou serviços, mas ainda não foi qualificado como uma oportunidade de negócio. leads são o ponto de partida do processo de vendas. * conta (account): uma empresa ou organização com a qual você faz negócios. contas armazenam informações sobre a empresa, como endereço, setor e histórico de relacionamento. * contato (contact): uma pessoa associada a uma conta. contatos são os indivíduos com quem os vendedores interagem dentro de uma empresa. * oportunidade (opportunity): um negócio potencial que você está tentando fechar. oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas. * estágio da oportunidade (opportunity stage): o progresso de uma oportunidade através do ciclo de vendas (ex: prospecção, qualificação, proposta, negociação, fechado ganho/perdido). * atividade (activity): tarefas, eventos (reuniões, chamadas) e e-mails relacionados a leads, contatos, contas e oportunidades. ajuda a manter o histórico de interações. * painel (dashboard): representações visuais de dados de relatórios, fornecendo uma visão rápida do desempenho de vendas. * relatório (report): listas de registros que atendem a critérios definidos, usados para analisar dados de vendas. navegação na interface: * página inicial (home page): visão geral personalizada com painéis, tarefas e eventos importantes. * barra de navegação (navigation bar): acesso rápido a objetos e funcionalidades como leads, contas, oportunidades, tarefas, etc. * pesquisa global (global search): encontre rapidamente qualquer registro na plataforma. * configuração (setup): área administrativa para personalizar e configurar o sales cloud. primeiros passos práticos: 1. criar um lead:   1. na barra de navegação, clique em leads. 2. clique em novo. 3. preencha os campos obrigatórios como nome, sobrenome, empresa e status do lead. 4. clique em salvar.   2. converter um lead:   1. abra o lead que você acabou de criar. 2. clique no botão converter. 3. você pode criar uma nova conta, contato e oportunidade, ou anexar a registros existentes. 4. preencha os detalhes da oportunidade (nome da oportunidade, estágio, valor, data de fechamento). 5. clique em converter.   3. gerenciar uma oportunidade:   1. após a conversão, você será redirecionado para a nova oportunidade. 2. atualize o estágio da oportunidade à medida que o negócio avança. 3. adicione atividades (tarefas, eventos) para registrar interações com o cliente. 4. adicione produtos à oportunidade, especificando quantidades e preços. 5. crie cotações (quotes) para formalizar propostas ao cliente.   4. criar um relatório simples:   1. na barra de navegação, clique em relatórios. 2. clique em novo relatório. 3. selecione o tipo de relatório, por exemplo, oportunidades. 4. arraste campos para as colunas do relatório e adicione filtros (ex: estágio da oportunidade = 'fechado ganho'). 5. clique em executar para ver os resultados e salvar o relatório. exercício prático: gerenciamento básico de oportunidades cenário: você é um novo representante de vendas e precisa registrar uma nova oportunidade de negócio para um cliente existente, acompanhar seu progresso e registrar uma atividade.   tarefa:   1. crie uma nova conta chamada \"tech solutions ltda.\". 2. crie um novo contato associado a \"tech solutions ltda.\" chamado \"joão silva\" com o cargo \"gerente de ti\". 3. crie uma nova oportunidade para \"tech solutions ltda.\" com o nome \"projeto de implementação de crm\", valor de r$ 50.000,00 e data de fechamento para o final do próximo mês, no estágio \"prospecção\". 4. registre uma nova tarefa na oportunidade \"projeto de implementação de crm\" com o assunto \"ligar para joão silva para qualificação\", data de vencimento para amanhã. 5. avance o estágio da oportunidade para \"qualificação\".   solução:   1. criação da conta:      * navegue até contas na barra de navegação.    * clique em novo.    * preencha nome da conta: tech solutions ltda.    * clique em salvar.   2. criação do contato:      * na página da conta \"tech solutions ltda.\", vá para a seção contatos.    * clique em novo contato.    * preencha nome: joão, sobrenome: silva, cargo: gerente de ti.    * clique em salvar.   3. criação da oportunidade:      * na página da conta \"tech solutions ltda.\", vá para a seção oportunidades.    * clique em nova oportunidade.    * preencha nome da oportunidade: projeto de implementação de crm.    * preencha valor: 50000.    * preencha data de fechamento: [final do próximo mês].    * preencha estágio: prospecção.    * clique em salvar.   4. registro da tarefa:      * na página da oportunidade \"projeto de implementação de crm\", vá para a seção atividades.    * clique em nova tarefa.    * preencha assunto: ligar para joão silva para qualificação.    * preencha data de vencimento: [amanhã].    * clique em salvar.   5. avançar estágio da oportunidade:      * na página da oportunidade \"projeto de implementação de crm\", clique no estágio atual (prospecção).    * selecione qualificação na lista suspensa.    * clique em salvar. recursos para iniciantes: * trailhead: módulo \"sales cloud basics\". * ajuda salesforce: documentação oficial sobre gestão de leads, contas, contatos e oportunidades. 2.2. nível intermediário: aprofundamento e aplicação no sales cloud objetivo: dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas. aprofundamento nas ferramentas e conceitos: * automação de processos (process builder / flow): crie automações para tarefas como atribuição de leads, atualizações de campo, envio de e-mails e criação de tarefas com base em gatilhos e condições. * regras de atribuição de leads (lead assignment rules): defina critérios para atribuir leads automaticamente a vendedores ou filas com base em região, setor, tamanho da empresa, etc. * filas (queues): coleções de registros (leads, casos) que podem ser acessados por um grupo de usuários, permitindo que o primeiro disponível assuma a responsabilidade. * caminho (path): um guia visual na página de registro que mostra os estágios de um processo (ex: estágios da oportunidade) e fornece orientações e campos-chave para cada estágio. * previsão de vendas (forecasting): utilize a funcionalidade de previsão para estimar a receita futura com base no pipeline de vendas. entenda os diferentes tipos de previsão (ex: melhor caso, compromisso, pipeline). * gerenciamento de territórios (territory management): organize seus vendedores e contas em territórios, permitindo que as equipes se concentrem em mercados específicos e gerenciem o acesso aos dados. * salesforce mobile app: explore as funcionalidades completas do sales cloud no aplicativo móvel, incluindo registro de chamadas, atualização de oportunidades e acesso a painéis em tempo real. * integração de e-mail (salesforce inbox / einstein activity capture): sincronize e-mails e eventos do seu cliente de e-mail (outlook, gmail) com o salesforce, registre atividades automaticamente e obtenha insights. * salesforce cpq (configure, price, quote): (se aplicável) entenda como o cpq automatiza a configuração de produtos complexos, a precificação e a geração de cotações, garantindo precisão e agilidade. exercício prático: automação de atribuição de leads cenário: sua empresa recebe muitos leads e precisa garantir que eles sejam atribuídos rapidamente ao vendedor correto com base na região.   tarefa:   1. crie uma regra de atribuição de leads que atribua leads da \"região sudeste\" ao \"vendedor a\" e leads da \"região sul\" ao \"vendedor b\". 2. crie um novo lead com a \"região sudeste\" e verifique se ele foi atribuído corretamente.   solução:   1. criação da regra de atribuição de leads:      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite regras de atribuição de leads e selecione.    * clique em novo para criar uma nova regra.    * dê um nome da regra (ex: atribuição por região).    * marque ativo.    * clique em salvar.    * clique no nome da regra que você acabou de criar.    * em entradas de regra de atribuição, clique em novo.       * ordem: 1       * critérios: lead: região igual a sudeste       * atribuir a: usuário [nome do vendedor a]       * marque não substituir a atribuição manual do proprietário (opcional, dependendo da política).       * clique em salvar.    * clique em novo novamente para a segunda entrada.       * ordem: 2       * critérios: lead: região igual a sul       * atribuir a: usuário [nome do vendedor b]       * clique em salvar.   2. teste da atribuição de leads:      * crie um novo lead (como no nível iniciante).    * preencha nome, sobrenome, empresa.    * no campo região, insira sudeste.    * certifique-se de que a opção atribuir usando regras de atribuição ativas esteja marcada (geralmente é o padrão ao criar leads).    * clique em salvar.    * verifique o campo proprietário do lead para confirmar se o lead foi atribuído ao \"vendedor a\". repita o processo para a \"região sul\" e verifique a atribuição ao \"vendedor b\". recursos para intermediários: * trailhead: módulos \"sales cloud automation\", \"sales cloud productivity\". * ajuda salesforce: guias sobre process builder/flow, previsão de vendas, einstein activity capture. 2.3. nível especialista: otimização e estratégia no sales cloud objetivo: dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar o desempenho de vendas e a tomada de decisões estratégicas. tópicos avançados e estratégicos: * einstein for sales cloud: aprofunde-se nos recursos de ia, como:    * einstein lead scoring: priorize leads com base na probabilidade de conversão.    * einstein opportunity scoring: avalie a probabilidade de uma oportunidade ser ganha.    * einstein activity capture: automatize a captura de e-mails e eventos e obtenha insights sobre o engajamento.    * einstein forecasting: melhore a precisão das previsões de vendas com ia.    * einstein bots for sales: use chatbots para qualificação inicial de leads ou para responder a perguntas comuns de clientes. * integração com marketing cloud (marketing cloud connect): entenda como sincronizar dados entre sales cloud e marketing cloud para campanhas de marketing e vendas coordenadas. * integração com service cloud: configure a integração para que as equipes de vendas tenham visibilidade dos casos de serviço e vice-versa, garantindo uma visão 360 do cliente. * api e desenvolvimento (apex, visualforce, lightning web components): compreenda como estender a funcionalidade do sales cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas. * gerenciamento de dados e qualidade: estratégias para garantir a qualidade dos dados no sales cloud, incluindo desduplicação, validação e enriquecimento de dados. * relatórios e dashboards avançados: crie relatórios complexos com tipos de relatório personalizados, junções e resumos. desenvolva painéis interativos para diferentes níveis da organização (executivo, gerencial, individual). * estratégias de vendas e metodologias: adapte o sales cloud para suportar metodologias de vendas específicas (ex: meddic, challenger sale, spin selling). * salesforce shield: entenda as capacidades de segurança avançada, como criptografia de plataforma, monitoramento de eventos e auditoria de campo. estudo de caso avançado: otimização do pipeline de vendas com einstein cenário: uma empresa está lutando para priorizar seus leads e oportunidades, resultando em tempo de vendas prolongado e taxas de conversão abaixo do ideal. eles querem usar o einstein para otimizar seu pipeline.   tarefa:   1. configure o einstein lead scoring para priorizar leads com maior probabilidade de conversão. 2. configure o einstein opportunity scoring para ajudar os vendedores a focar nas oportunidades mais promissoras. 3. crie um painel que exiba os leads e oportunidades com pontuações mais altas do einstein.   solução:   1. configuração do einstein lead scoring:      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite einstein lead scoring e selecione.    * siga as instruções para ativar e configurar o recurso. o einstein analisará seus dados históricos de leads para construir um modelo preditivo.    * certifique-se de que o campo pontuação do lead do einstein esteja visível nos layouts de página de lead.   2. configuração do einstein opportunity scoring:      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite einstein opportunity scoring e selecione.    * siga as instruções para ativar e configurar o recurso. o einstein analisará seus dados históricos de oportunidades para prever a probabilidade de ganho.    * certifique-se de que o campo pontuação da oportunidade do einstein esteja visível nos layouts de página de oportunidade.   3. criação do painel com pontuações einstein:      * crie dois novos relatórios: um para leads com pontuação einstein e outro para oportunidades com pontuação einstein.       * no relatório de leads, adicione filtros para pontuação do lead do einstein maior que [um valor, ex: 70].       * no relatório de oportunidades, adicione filtros para pontuação da oportunidade do einstein maior que [um valor, ex: 70].    * navegue até painéis (dashboards) na barra de navegação.    * clique em novo painel.    * adicione componentes de painel baseados nos relatórios que você criou (ex: um gráfico de barras mostrando leads por pontuação, um medidor para oportunidades de alto valor).    * configure o painel para ser acessível aos gerentes de vendas e vendedores.   resultados esperados: os vendedores agora podem priorizar seus leads e oportunidades com base nas pontuações do einstein, focando seus esforços onde há maior probabilidade de sucesso. isso leva a um ciclo de vendas mais curto e a taxas de conversão mais altas. recursos para especialistas: * trailhead: módulos \"einstein for sales cloud\", \"sales cloud integration\", \"salesforce platform basics\". * documentação da salesforce: guias de implementação e melhores práticas para recursos avançados e integrações. salesforce marketing cloud engagement o salesforce marketing cloud é uma plataforma de marketing digital líder de mercado, projetada para ajudar empresas de todos os tamanhos a se conectarem com seus clientes de maneira mais personalizada e eficaz em todos os pontos de contato. ele oferece um conjunto abrangente de ferramentas e funcionalidades que permitem aos profissionais de marketing criar, gerenciar, automatizar e otimizar jornadas de cliente em múltiplos canais, como email, mobile (sms, notificações push), mídias sociais, publicidade digital e web. propósito e importância: no cenário atual, onde os clientes esperam experiências personalizadas e relevantes, o marketing cloud se torna essencial. ele permite que as empresas:   * unifiquem dados do cliente: centralizem informações de diversas fontes (crm, vendas, serviços, comportamento online) para criar uma visão 360º do cliente. * segmentem audiências: criem segmentos de público altamente específicos com base em dados demográficos, comportamentais e de engajamento. * personalizem a comunicação: entreguem mensagens e ofertas personalizadas em escala, no canal certo e no momento certo. * automatizem jornadas: construam jornadas de cliente automatizadas e inteligentes que se adaptam ao comportamento individual. * engajem em múltiplos canais: coordenem campanhas de marketing através de email, mobile, social, web e publicidade. * analisem o desempenho: meçam o impacto das campanhas de marketing com análises e relatórios detalhados, permitindo a otimização contínua. * utilizem inteligência artificial (ia): aproveitem o poder do salesforce einstein (ia da salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas. principais componentes (studios e builders): o marketing cloud é composto por diversos módulos, conhecidos como \"studios\" e \"builders\", cada um focado em um aspecto específico do marketing digital:   * journey builder: ferramenta central para projetar e automatizar jornadas de cliente 1:1 em múltiplos canais e pontos de contato. permite criar fluxos baseados em gatilhos e comportamentos do cliente. * email studio: solução completa para criação, segmentação, envio, rastreamento e gerenciamento de campanhas de email marketing. inclui ferramentas para design de emails responsivos, testes a/b e gerenciamento de entregabilidade. * mobile studio: permite o engajamento com clientes através de canais mobile, incluindo sms, notificações push (para aplicativos móveis) e mensagens de chat (como whatsapp e facebook messenger). * social studio: plataforma para gerenciamento de mídias sociais, permitindo monitorar conversas, publicar conteúdo, engajar com a audiência e analisar o desempenho social. * advertising studio (ou marketing cloud advertising): conecta os dados de crm e marketing com plataformas de publicidade digital (como google ads, facebook ads, linkedin ads) para criar campanhas de aquisição, reengajamento e lookalike mais eficazes. * web studio: ferramenta para criar e gerenciar landing pages, microsites e formulários web personalizados, integrados com os dados do marketing cloud. * automation studio: permite criar automações de marketing para tarefas como extração de dados, importação de arquivos, segmentação e execução de scripts, funcionando como um motor de etl (extract, transform, load) dentro da plataforma. * contact builder: ferramenta para gerenciar o modelo de dados dos contatos no marketing cloud, definindo atributos, fontes de dados e relacionamentos entre diferentes conjuntos de dados. * analytics builder: fornece relatórios e dashboards para analisar o desempenho das campanhas de marketing e das jornadas de cliente. * content builder: repositório centralizado para criar, gerenciar e reutilizar conteúdo de marketing (imagens, blocos de texto, templates de email, etc.) em diferentes canais. * interaction studio (agora parte do marketing cloud personalization): permite a personalização em tempo real da experiência do cliente no site e em outros canais, com base no comportamento individual. * intelligence (anteriormente datorama): plataforma de inteligência de marketing que conecta e unifica dados de diversas fontes para fornecer insights e análises avançadas sobre o desempenho do marketing.   compreender a estrutura e as capacidades desses componentes é o primeiro passo para dominar o salesforce marketing cloud e utilizá-lo para impulsionar resultados de negócios significativos. marketing cloud no ecossistema salesforce customer 360: o marketing cloud é um pilar fundamental do salesforce customer 360, garantindo que as empresas possam orquestrar experiências de cliente personalizadas e conectadas em todos os pontos de contato:   * marketing cloud e sales cloud: o marketing cloud pode nutrir leads e prospects, qualificando-os antes de passá-los para o sales cloud. as informações de vendas podem ser usadas para segmentar e personalizar campanhas de marketing, garantindo que as mensagens sejam relevantes para o estágio do cliente no ciclo de vendas. * marketing cloud e service cloud: o histórico de serviço do cliente pode ser usado para personalizar comunicações de marketing, evitando mensagens irrelevantes ou insensíveis. o marketing cloud pode enviar pesquisas de satisfação pós-serviço e campanhas de retenção baseadas na experiência do cliente. * marketing cloud e financial services cloud: para instituições financeiras, o marketing cloud pode utilizar os dados ricos do fsc para criar campanhas altamente segmentadas e personalizadas, oferecendo produtos e serviços financeiros relevantes para as necessidades e metas de cada cliente, como hipotecas, investimentos ou seguros.   essa integração permite que as empresas que utilizam o salesforce customer 360 ofereçam uma experiência de cliente fluida e consistente em todos os pontos de contato, desde o primeiro contato de marketing até o suporte pós-venda, criando lealdade e promovendo o crescimento do negócio. guia de aprendizado progressivo do marketing cloud engagement esta seção oferece um guia progressivo e aprofundado para aprender o salesforce marketing cloud, começando pelos conceitos fundamentais e avançando para tópicos mais complexos. o objetivo é fornecer um caminho de aprendizado estruturado e prático. nível iniciante: fundamentos e primeiros passos objetivo: familiarizar-se com a plataforma, seus componentes principais, terminologia e realizar tarefas básicas. conceitos fundamentais essenciais: * marketing cloud engagement: nome completo da plataforma, focada em engajamento do cliente. * contato (contact) / assinante (subscriber): o indivíduo. a chave é o subscriber key (ou contact key), um identificador único e imutável (não o endereço de email) que representa a pessoa em toda a plataforma. usar um id do crm (como o contact id do sales cloud) é uma prática recomendada. * data extension (de): tabelas para armazenar dados. pense nelas como planilhas ou tabelas de banco de dados. são a base para segmentação e personalização.    * tipos: standard (dados gerais), filtered (subconjunto de outra de), random (amostra aleatória).    * sendable vs. non-sendable: des sendable podem ser usadas para envios e devem ter um campo relacionado ao subscriber key. * list (lista - legado): método antigo, menos flexível que des. evite para novas implementações. * atributo (attribute): uma coluna em uma data extension ou um campo de perfil/preferência. * business unit (bu): uma subdivisão da conta para gerenciar acesso, dados e conteúdo separadamente (ex: por marca, país). a bu principal é chamada de parent bu ou enterprise bu, e as subdivisões são child bus. * studio: módulo focado em um canal (email studio, mobile studio, social studio, advertising studio). * builder: ferramenta para criar e gerenciar ativos ou processos (journey builder, content builder, contact builder, automation studio, analytics builder). navegação na interface: * login: acesse pelo url específico da sua instância (ex: mc.sx.exacttarget.com). * app switcher: ícone no canto superior esquerdo para navegar entre studios e builders. * seleção de bu: menu suspenso no canto superior direito para mudar de business unit. * setup: acesso via menu do seu usuário (canto superior direito) para configurações administrativas. primeiros passos práticos: criar uma data extension:   1. vá para audience builder > contact builder. 2. clique em data extensions. 3. clique em create > standard data extension. 4. defina properties (name: meus_primeiros_contatos, is sendable: yes). 5. defina data retention (opcional). 6. adicione fields (colunas): subscriberkey (text, primary key), emailaddress (emailaddress, nullable: no), firstname (text), status (text, default value: 'active'). 7. em send relationship, conecte subscriberkey a subscribers on subscriber key. 8. clique em complete.   importar dados para a de:   1. crie um arquivo csv simples com cabeçalhos correspondentes aos campos da de (subscriberkey, emailaddress, firstname, status). 2. na de criada, vá para a aba records e clique em import. 3. faça upload do csv, configure o delimitador e clique em next. 4. mapeie as colunas do csv para os campos da de (map by header row). 5. revise e clique em finish.   criar um email simples:   1. vá para content builder. 2. clique em create > email message. 3. escolha template > basic > empty (ou um template existente). 4. dê um nome ao email (ex: meu_primeiro_email). 5. arraste blocos de conteúdo (image, text, button) para o corpo do email. 6. adicione texto e imagens. 7. use a personalização básica: olá %%firstname%%, no bloco de texto. 8. defina um assunto (subject line). 9. clique em done editing.   realizar um envio de teste:   1. vá para email studio > email. 2. clique em interactions > user-initiated emails. 3. clique em create. 4. dê um nome (ex: teste_primeiro_email). 5. selecione o email criado (meu_primeiro_email). 6. em select audience, escolha a de meus_primeiros_contatos. 7. configure send options (sender profile, delivery profile). 8. na aba review & send, marque a caixa de certificação. 9. clique em send. (cuidado: isso envia para a de real. para testes, use uma de com seus próprios emails ou use a opção de test send dentro do content builder). exercício prático: criação e importação de data extension cenário: você precisa armazenar informações básicas de novos leads coletados em um evento. os dados incluem nome, sobrenome, email e empresa.   tarefa:   1. crie uma nova data extension (de) chamada event_leads com os campos apropriados. 2. prepare um arquivo csv de exemplo com alguns leads. 3. importe os dados do arquivo csv para a de event_leads usando a ferramenta de importação.   solução:   1. criação da data extension:   1. navegue até audience builder > contact builder. 2. clique em data extensions no menu superior. 3. clique em create no canto superior direito. 4. selecione standard data extension e clique em ok. 5. properties:    * creation method: create from new    * name: event_leads    * external key: (deixe gerar automaticamente ou insira event_leads)    * description: \"leads coletados no evento xyz\"    * is sendable?: no (esta de é apenas para armazenamento inicial)    * is testable?: no 6. clique em next. 7. data retention policy: (deixe como off por enquanto, ou configure se necessário). 8. clique em next. 9. fields:    * adicione os seguintes campos:       * leadid (type: text, length: 50, primary key: yes, nullable: no)       * firstname (type: text, length: 100, nullable: yes)       * lastname (type: text, length: 100, nullable: yes)       * emailaddress (type: emailaddress, length: 254, nullable: no)       * companyname (type: text, length: 150, nullable: yes)       * eventdate (type: date, nullable: yes, default value: current date) 10. clique em complete.   2. preparação do arquivo csv:   crie um arquivo chamado event_leads_import.csv com o seguinte conteúdo:   leadid,firstname,lastname,emailaddress,companyname   evt001,ana,silva,ana.silva@email.com,empresa a   evt002,bruno,costa,bruno.costa@email.com,empresa b   evt003,carla,mendes,carla.mendes@email.com,empresa c   3. importação dos dados:   1. navegue até a de event_leads que você criou. 2. clique na aba records. 3. clique em import no canto superior direito. 4. upload file:    * clique em choose file e selecione event_leads_import.csv.    * delimiter: comma    * date format: (selecione o formato apropriado, ex: english (united states)) 5. clique em next. 6. configure mapping:    * selecione map by header row (se os nomes das colunas no csv corresponderem aos nomes dos campos na de).    * verifique se os campos estão mapeados corretamente. 7. clique em next. 8. review and import:    * verifique as configurações.    * insira seu endereço de email para receber notificação.    * import type: add and update (ou add only, se tiver certeza que não há duplicatas). 9. clique em finish. 10. aguarde a notificação por email ou verifique a aba records na de para confirmar a importação.   recursos para iniciantes:   * trailhead: módulo \"marketing cloud engagement basics\". * ajuda salesforce: documentação oficial sobre cada studio e builder. nível intermediário: aprofundamento e aplicação objetivo: dominar as ferramentas principais, segmentar audiências com precisão, personalizar comunicações e criar automações e jornadas eficazes. aprofundamento nas ferramentas: email studio & content builder:   * testes a/b: teste assuntos, remetentes, conteúdo, horários de envio. analise os resultados para otimizar. * conteúdo dinâmico: crie blocos que mudam com base em atributos (ex: mostrar oferta diferente para clientes vip vs. não-vip). * ampscript básico: use lookuprows() para buscar dados de outra de, if/else para lógica condicional, formatdate(), formatcurrency() para exibição.   %%[ var @firstname, @loyaltystatus        set @firstname = attributevalue(\"firstname\")        set @loyaltystatus = lookup(\"loyalty_data\",\"status\",\"subscriberkey\", _subscriberkey)        if empty(@firstname) then set @firstname = \"cliente\" endif ]%%   olá %%=v(@firstname)=%%,   %%[ if @loyaltystatus == \"gold\" then ]%%     <p>como cliente gold, aproveite 15% off!</p>   %%[ else ]%%     <p>confira nossas novidades!</p>   %%[ endif ]%%   * send log: configure para rastrear cada envio individualmente (útil para auditoria e relatórios personalizados).   contact builder & data designer:   * relacionamentos: crie links entre des (ex: de de clientes ligada à de de pedidos via customerid). use attribute groups para visualizar essas relações. * synchronized data extensions: traga dados do sales/service cloud (contatos, leads, contas, objetos personalizados) para o marketing cloud para segmentação.   automation studio:   * sql query activity: use joins para combinar dados de múltiplas des, where para filtrar, group by para agregar.   /* seleciona clientes que compraram produto x nos últimos 30 dias */   select c.subscriberkey, c.emailaddress, c.firstname   from contact_salesforce c   join orders_salesforce o on c.id = o.contactid   join orderitems_salesforce oi on o.id = oi.orderid   join products_salesforce p on oi.productid = p.id   where p.productcode = 'prod-x'   and o.orderdate >= dateadd(day, -30, getdate())   and c.emailoptin = 1   /* target de: recent_productx_buyers (overwrite) */   * script activity (básico ssjs): manipule dados ou faça chamadas api simples. * file transfer & import/export: automatize a troca de arquivos com sftp. * estrutura: crie automações com múltiplos passos (import > sql > email send).   journey builder:   * splits: use decision splits (baseado em dados do contato, ex: segment == 'vip') e engagement splits (baseado em interação com email/push anterior, ex: abriu email 1?). * metas e saídas: defina uma meta (ex: purchasemade == true) para medir o sucesso da jornada e permita que contatos saiam se atingirem a meta. * update contact: modifique um atributo do contato durante a jornada (ex: marcar welcomejourneycompleted = true). segmentação avançada na prática: * rfm (recency, frequency, monetary): use sql para calcular scores rfm e segmentar clientes (ex: campeões, leais, em risco, perdidos). * segmentação comportamental: combine dados de cliques em email, visitas ao site (wma) e compras para criar segmentos como \"interessados em categoria y mas não compraram\" ou \"abandonaram carrinho\". * einstein segmentation: explore os segmentos preditivos criados pelo einstein (ex: probabilidade de abrir, clicar, converter, churn). personalização efetiva: * ampscript para conteúdo dinâmico: use lookuprows() e loops for para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos). * einstein content selection: deixe o einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento. * personalização cross-channel: use dados de um canal para informar outro (ex: se visitou página do produto x no site, envie email com mais detalhes sobre o produto x). exercício prático: segmentação e personalização básica cenário: usando a de event_leads do exercício anterior (agora populada), você quer enviar um email de acompanhamento personalizado para os leads da \"empresa b\". o email deve saudar o lead pelo primeiro nome.   tarefa:   1. crie uma nova data extension sendable chamada target_empresab_leads. 2. escreva uma consulta sql no automation studio para popular target_empresab_leads com os leads da \"empresa b\" da de event_leads. 3. crie um email simples no content builder que use ampscript básico para exibir o firstname.   solução:   1. criação da data extension sendable:   siga os passos similares ao exercício anterior, mas desta vez:   * name: target_empresab_leads * is sendable?: yes * fields: subscriberkey (text, primary key), emailaddress (emailaddress), firstname (text), lastname (text), companyname (text) * send relationship: subscriberkey to subscribers on subscriber key   [continua...] guia de aprendizado progressivo do service cloud esta seção oferece um guia progressivo e aprofundado para aprender o salesforce service cloud, desde os conceitos fundamentais até a otimização do atendimento ao cliente com recursos avançados e inteligência artificial. nível iniciante: fundamentos e primeiros passos no service cloud objetivo: familiarizar-se com a interface do service cloud, seus objetos padrão e o fluxo básico de gerenciamento de casos. conceitos fundamentais essenciais: * caso (case): uma solicitação, pergunta ou problema de um cliente que requer atenção e resolução. casos são o objeto central do service cloud. * fila (queue): uma coleção de casos (ou outros registros) que podem ser acessados por um grupo de usuários. permite que o primeiro agente disponível assuma a responsabilidade por um caso. * regra de atribuição de casos (case assignment rule): define critérios para atribuir casos automaticamente a usuários ou filas com base em origem, assunto, prioridade, etc. * regra de escalonamento (escalation rule): automatiza o escalonamento de casos que não são resolvidos dentro de um tempo especificado, garantindo que problemas críticos sejam tratados. * base de conhecimento (knowledge base): um repositório de artigos, faqs e guias de solução de problemas que podem ser usados por agentes e clientes para encontrar respostas. * console de serviço (service console): uma interface de usuário otimizada para agentes de serviço, que oferece uma visão consolidada de todas as informações relevantes do cliente e do caso. * contrato de nível de serviço (sla - service level agreement): um acordo que define o tempo máximo para responder e resolver um caso, com base na prioridade ou tipo de caso. navegação na interface: * console de serviço: acesse o console para uma visão unificada dos casos, clientes e ferramentas de serviço. * barra de navegação: acesso rápido a objetos como casos, contas, contatos, artigos, etc. * pesquisa global: encontre rapidamente qualquer registro na plataforma. * configuração (setup): área administrativa para personalizar e configurar o service cloud. primeiros passos práticos: 1. criar um caso:   1. no console de serviço, clique em casos. 2. clique em novo. 3. preencha os campos obrigatórios como assunto, descrição, status, prioridade e cliente (conta/contato). 4. clique em salvar.   2. atribuir um caso a uma fila:   1. abra o caso que você acabou de criar. 2. altere o campo proprietário do caso para uma fila existente (ex: fila de suporte geral). 3. clique em salvar.   3. responder a um caso:   1. abra um caso. 2. na seção feed do caso, use a opção email para enviar uma resposta ao cliente. 3. você pode usar modelos de e-mail para agilizar a resposta. 4. registre outras interações (chamadas, notas) no feed do caso.   4. criar um artigo na base de conhecimento:   1. na barra de navegação, clique em artigos (ou knowledge). 2. clique em novo. 3. preencha o título, o resumo e o conteúdo do artigo. 4. selecione o tipo de artigo e as categorias de dados. 5. publique o artigo para que ele esteja disponível para agentes e clientes (se configurado para autoatendimento). exercício prático: gerenciamento básico de casos cenário: um cliente envia um e-mail com uma dúvida sobre um produto. você precisa registrar essa dúvida como um caso, atribuí-la à fila correta e responder ao cliente.   tarefa:   1. crie um novo caso com o assunto \"dúvida sobre produto x\" e a descrição \"o produto x não está funcionando conforme o esperado.\". associe-o a um contato existente (ex: \"maria souza\"). 2. atribua este caso à \"fila de suporte técnico\". 3. envie um e-mail de resposta ao cliente informando que o caso foi recebido e que a equipe técnica entrará em contato. 4. altere o status do caso para \"em andamento\".   solução:   1. criação do caso:      * no console de serviço, clique em casos.    * clique em novo.    * preencha assunto: dúvida sobre produto x.    * preencha descrição: o produto x não está funcionando conforme o esperado..    * preencha status: novo.    * preencha prioridade: média.    * preencha nome do contato: maria souza (ou crie um novo se não existir).    * clique em salvar.   2. atribuição à fila:      * no caso recém-criado, clique no campo proprietário do caso.    * selecione a opção fila e escolha fila de suporte técnico (ou uma fila similar existente).    * clique em salvar.   3. envio de e-mail de resposta:      * no feed do caso, clique na aba email.    * preencha o corpo do e-mail com a mensagem: prezada maria souza, recebemos sua solicitação sobre o produto x (caso #[número do caso]). nossa equipe de suporte técnico entrará em contato em breve para ajudá-la. agradecemos a sua paciência.    * clique em enviar.   4. alterar status do caso:      * no caso, altere o campo status para em andamento.    * clique em salvar. recursos para iniciantes: * trailhead: módulo \"service cloud basics\". * ajuda salesforce: documentação oficial sobre gestão de casos, filas e regras de atribuição. nível intermediário: aprofundamento e aplicação no service cloud objetivo: dominar a automação de serviço, o gerenciamento de canais, a utilização da base de conhecimento e a análise de desempenho para otimizar a eficiência do atendimento. aprofundamento nas ferramentas e conceitos: * omni-channel: configure o roteamento de trabalho para direcionar casos, chats e outras interações para os agentes mais qualificados, com base em capacidade e habilidades. * email-to-case: configure para que e-mails enviados para um endereço específico (ex: suporte@suaempresa.com) sejam automaticamente convertidos em casos no service cloud. * web-to-case: crie formulários web que os clientes podem preencher para enviar solicitações de suporte, que são automaticamente convertidas em casos. * fluxos (flows): crie fluxos de tela para guiar agentes através de processos complexos, ou fluxos acionados por registro para automatizar tarefas de serviço. * macros: automatize sequências de ações repetitivas para agentes, como atualizar campos de caso, enviar e-mails e registrar atividades. * milestones e entitlements: gerencie slas (service level agreements) definindo marcos (milestones) para o tempo de resposta e resolução de casos, e direitos (entitlements) para determinar o nível de suporte que um cliente tem direito. * chat (live agent): implemente um chat ao vivo no seu site para oferecer suporte em tempo real aos clientes. * canais de mensagens (messaging channels): integre plataformas de mensagens como whatsapp e facebook messenger para interagir com clientes onde eles já estão. * relatórios e dashboards de serviço: crie relatórios e painéis avançados para monitorar métricas de desempenho do serviço, como tempo médio de resolução, volume de casos por canal, satisfação do cliente (csat) e conformidade com sla. exercício prático: automação de casos com email-to-case e regras de atribuição cenário: sua empresa deseja automatizar a criação e atribuição de casos a partir de e-mails de clientes, direcionando-os para a equipe correta com base no assunto do e-mail.   tarefa:   1. configure o email-to-case para um endereço de e-mail de suporte (simulado). 2. crie uma regra de atribuição de casos que atribua casos com o assunto \"problema de faturamento\" para a \"fila de faturamento\" e outros casos para a \"fila de suporte geral\". 3. simule o envio de um e-mail com o assunto \"problema de faturamento\" e verifique se o caso foi criado e atribuído corretamente.   solução:   1. configuração do email-to-case (simulado):      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite email-to-case e selecione.    * habilite o email-to-case e configure um endereço de e-mail de roteamento (ex: support@yourcompany.com).    * anote o endereço de e-mail de serviço gerado pelo salesforce (este será o endereço para onde os clientes enviarão e-mails).    * nota: em um ambiente real, você configuraria o encaminhamento de e-mail do seu servidor de e-mail para este endereço gerado.   2. criação da regra de atribuição de casos:      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite regras de atribuição de casos e selecione.    * clique em novo para criar uma nova regra.    * dê um nome da regra (ex: atribuição de casos por assunto).    * marque ativo.    * clique em salvar.    * clique no nome da regra que você acabou de criar.    * em entradas de regra de atribuição, clique em novo.       * ordem: 1       * critérios: assunto do caso contém problema de faturamento       * atribuir a: fila fila de faturamento (crie esta fila se não existir).       * clique em salvar.    * clique em novo novamente para a segunda entrada (regra padrão).       * ordem: 2       * critérios: (deixe em branco para capturar todos os outros casos)       * atribuir a: fila fila de suporte geral (crie esta fila se não existir).       * clique em salvar.   3. simulação e verificação:      * simule o envio de um e-mail para o endereço de e-mail de serviço configurado no email-to-case com o assunto problema de faturamento - pedido #123.    * verifique a aba casos no service cloud. um novo caso deve ter sido criado e atribuído automaticamente à fila de faturamento.    * simule o envio de outro e-mail com um assunto diferente (ex: dúvida sobre login) e verifique se ele foi atribuído à fila de suporte geral. recursos para intermediários: * trailhead: módulos \"service cloud automation\", \"service cloud omni-channel\". * ajuda salesforce: guias sobre email-to-case, web-to-case, fluxos, macros e milestones. nível especialista: otimização e estratégia no service cloud objetivo: dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas. tópicos avançados e estratégicos: * einstein for service cloud: aprofunde-se nos recursos de ia, como:    * einstein bots: crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano.    * einstein case classification: use ia para prever e preencher automaticamente campos de caso (ex: tipo, subtipo, prioridade) com base no assunto e descrição, agilizando o processo para agentes.    * einstein case routing: encaminhe casos automaticamente para a fila ou agente correto com base nas previsões do einstein.    * einstein article recommendations: recomende artigos da base de conhecimento para agentes com base no contexto do caso, melhorando o tempo de resolução.    * einstein reply recommendations: sugira respostas prontas para agentes com base no histórico de conversas e no contexto do caso. * service cloud voice: integre telefonia e crm para uma experiência de agente unificada, com transcrição de chamadas, análise de sentimento e automação de fluxo de trabalho durante a chamada. * field service lightning (fsl): gerencie equipes de serviço de campo, agendamento de compromissos, gerenciamento de ativos e estoque de peças, tudo integrado ao service cloud. * integração com experience cloud (comunidades): crie portais de autoatendimento avançados e comunidades de clientes que se integram perfeitamente com a base de conhecimento e o gerenciamento de casos. * api e desenvolvimento (apex, visualforce, lightning web components): compreenda como estender a funcionalidade do service cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas. * análise de sentimento e qualidade de serviço: utilize ferramentas para analisar o sentimento do cliente em interações de chat e e-mail, e implemente programas de garantia de qualidade para agentes. * gestão de força de trabalho (workforce management): otimize a alocação de agentes, o planejamento de turnos e a previsão de demanda para garantir níveis de serviço ideais. estudo de caso avançado: implementação de um chatbot com einstein bots cenário: uma empresa de e-commerce deseja reduzir o volume de chamadas e e-mails para seu centro de suporte, oferecendo uma opção de autoatendimento 24/7 para perguntas frequentes.   tarefa:   1. projete um fluxo de conversação para um einstein bot que possa responder a perguntas sobre status de pedidos e política de devolução. 2. configure o bot para encaminhar para um agente humano se a pergunta não puder ser respondida ou se o cliente solicitar. 3. integre o bot ao site da empresa.   solução:   1. design do fluxo de conversação do einstein bot:      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite einstein bots e selecione.    * crie um novo bot e defina suas intenções (ex: verificar status do pedido, política de devolução, falar com agente).    * para a intenção verificar status do pedido:       * crie um diálogo que solicite o número do pedido ao cliente.       * use uma ação para buscar o status do pedido em um sistema externo (simulado via flow ou apex) ou em um objeto salesforce.       * responda ao cliente com o status do pedido.    * para a intenção política de devolução:       * crie um diálogo que forneça um link para o artigo da base de conhecimento sobre a política de devolução.    * para a intenção falar com agente:       * crie um diálogo que colete o nome e o e-mail do cliente e, em seguida, use uma ação para transferir a conversa para uma fila de agentes humanos (omni-channel).   2. configuração de encaminhamento para agente humano:      * no einstein bot, configure a opção de transferência para agente humano para os diálogos apropriados ou quando o bot não conseguir entender a intenção do cliente.    * certifique-se de que o omni-channel esteja configurado e que haja agentes disponíveis na fila para receber as transferências.   3. integração do bot ao site:      * no einstein bot, obtenha o código de incorporação do bot (geralmente um trecho de javascript).    * insira este código no cabeçalho ou rodapé do site da empresa para que o widget do chat apareça para os visitantes.   resultados esperados: o einstein bot pode lidar com um grande volume de perguntas comuns dos clientes, liberando os agentes humanos para se concentrarem em problemas mais complexos. isso melhora a satisfação do cliente ao fornecer respostas instantâneas e reduz os custos operacionais do suporte. recursos para especialistas: * trailhead: módulos \"einstein bots basics\", \"service cloud voice\", \"field service basics\". * documentação da salesforce: guias de implementação e melhores práticas para einstein bots, service cloud voice e fsl. guia de aprendizado progressivo do financial services cloud esta seção oferece um guia progressivo e aprofundado para aprender o salesforce financial services cloud, desde os conceitos fundamentais até a otimização do engajamento com clientes financeiros, conformidade e integração com sistemas legados. nível iniciante: fundamentos e primeiros passos no financial services cloud objetivo: familiarizar-se com a interface do financial services cloud, seus modelos de dados específicos do setor e o gerenciamento básico de clientes e relacionamentos financeiros. conceitos fundamentais essenciais: * pessoa (person account): um tipo de registro que combina as características de uma conta e um contato, usado para representar clientes individuais no setor financeiro. * conta financeira (financial account): representa qualquer tipo de conta financeira que um cliente possui (ex: conta corrente, poupança, empréstimo, hipoteca, apólice de seguro, investimento). * ativo e passivo (asset and liability): registros que detalham os ativos (ex: investimentos, propriedades) e passivos (ex: empréstimos, hipotecas) de um cliente, fornecendo uma visão do seu patrimônio líquido. * relacionamento (relationship): define as conexões entre pessoas, contas e grupos (ex: cônjuge, filho, colega de trabalho, membro da família em uma conta conjunta). * grupo (group): permite agrupar clientes e contas financeiras relacionadas (ex: uma família, um grupo de investimento, uma empresa e suas subsidiárias). * metas financeiras (financial goals): registros que permitem aos clientes e consultores definir e acompanhar objetivos financeiros (ex: aposentadoria, compra de casa, educação dos filhos). * centro de relacionamento acionável (actionable relationship center - arc): uma visualização gráfica que mostra as relações entre clientes, contas e grupos, facilitando a navegação e a compreensão da rede de um cliente. navegação na interface: * página inicial (home page): visão geral personalizada com painéis e informações relevantes para o profissional financeiro. * barra de navegação: acesso rápido a objetos como pessoas, contas financeiras, ativos e passivos, metas financeiras, etc. * pesquisa global: encontre rapidamente qualquer registro na plataforma. * configuração (setup): área administrativa para personalizar e configurar o financial services cloud. primeiros passos práticos: 1. criar uma pessoa (person account):   1. na barra de navegação, clique em pessoas (ou contas, se configurado para person accounts). 2. clique em novo. 3. preencha os campos obrigatórios como nome, sobrenome, e-mail e telefone. 4. clique em salvar.   2. adicionar uma conta financeira:   1. abra a pessoa que você acabou de criar. 2. na seção contas financeiras, clique em novo. 3. preencha os detalhes da conta financeira (ex: tipo de conta: conta corrente, nome da conta: conta corrente principal, saldo: r$ 10.000,00). 4. clique em salvar.   3. mapear relacionamentos:   1. abra a pessoa. 2. na seção relacionamentos, clique em novo relacionamento. 3. conecte a pessoa a outro contato ou pessoa (ex: cônjuge, filho) e defina o tipo de relacionamento. 4. clique em salvar.   4. criar uma meta financeira:   1. abra a pessoa. 2. na seção metas financeiras, clique em novo. 3. preencha os detalhes da meta (ex: nome da meta: aposentadoria, valor alvo: r$ 1.000.000,00, data alvo: [data futura]). 4. clique em salvar. exercício prático: gerenciamento básico de cliente financeiro cenário: você é um consultor financeiro e precisa registrar um novo cliente, suas contas financeiras e uma meta de investimento.   tarefa:   1. crie uma nova pessoa (person account) para \"carlos eduardo\" com e-mail \"carlos.eduardo@email.com\" e telefone \"(11) 98765-4321\". 2. adicione duas contas financeiras para carlos: uma \"conta poupança\" com saldo de r$ 50.000,00 e uma \"conta de investimento\" com saldo de r$ 100.000,00. 3. crie uma meta financeira para carlos: \"comprar imóvel\" com valor alvo de r$ 800.000,00 e data alvo para daqui a 5 anos.   solução:   1. criação da pessoa:      * navegue até pessoas.    * clique em novo.    * preencha nome: carlos, sobrenome: eduardo.    * preencha e-mail: carlos.eduardo@email.com.    * preencha telefone: (11) 98765-4321.    * clique em salvar.   2. adicionar contas financeiras:      * na página de carlos eduardo, vá para a seção contas financeiras.    * clique em novo.    * para a primeira conta:       * preencha tipo de conta financeira: poupança.       * preencha nome da conta financeira: poupança carlos eduardo.       * preencha saldo: 50000.       * clique em salvar.    * clique em novo novamente.    * para a segunda conta:       * preencha tipo de conta financeira: investimento.       * preencha nome da conta financeira: investimento carlos eduardo.       * preencha saldo: 100000.       * clique em salvar.   3. criar meta financeira:      * na página de carlos eduardo, vá para a seção metas financeiras.    * clique em novo.    * preencha nome da meta financeira: comprar imóvel.    * preencha valor alvo: 800000.    * preencha data alvo: [data daqui a 5 anos].    * clique em salvar. recursos para iniciantes: * trailhead: módulo \"financial services cloud basics\". * ajuda salesforce: documentação oficial sobre person accounts, financial accounts e relacionamentos. nível intermediário: aprofundamento e aplicação no financial services cloud objetivo: dominar a gestão de grupos e famílias, a automação de processos financeiros e a utilização de insights para um engajamento mais proativo e personalizado. aprofundamento nas ferramentas e conceitos: * grupos e famílias: gerencie relacionamentos complexos, incluindo famílias, grupos de investimento e entidades empresariais relacionadas. entenda como os dados são agregados em nível de grupo. * actionable relationship center (arc): utilize o arc para visualizar e navegar por redes de relacionamento complexas, identificar oportunidades e tomar ações diretamente do gráfico. * processos de negócios financeiros (financial services processes): entenda como o fsc oferece modelos de processos pré-construídos para abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e outras operações financeiras. * fluxos de trabalho e automação (flows): crie fluxos personalizados para automatizar tarefas específicas do setor financeiro, como aprovações de empréstimos, notificações de eventos de vida e acompanhamento de metas. * gerenciamento de referências (referral management): rastreie e gerencie referências de negócios dentro e fora da instituição, garantindo que as oportunidades sejam encaminhadas e acompanhadas de forma eficiente. * painéis e relatórios financeiros: crie relatórios e painéis personalizados para analisar o desempenho de vendas de produtos financeiros, o patrimônio líquido dos clientes, o progresso das metas e outras métricas financeiras. * modelos de dados estendidos: explore os objetos de dados adicionais que o fsc fornece para capturar informações financeiras detalhadas, como transações, seguros, hipotecas e investimentos. exercício prático: gerenciamento de família e metas agregadas cenário: você precisa gerenciar uma família de clientes, agregando suas contas financeiras e metas para ter uma visão consolidada do patrimônio e dos objetivos familiares.   tarefa:   1. crie uma nova pessoa (person account) para \"ana paula\" (cônjuge de carlos eduardo) e associe-a a carlos eduardo como \"cônjuge\". 2. crie um novo grupo chamado \"família eduardo\" e adicione carlos eduardo e ana paula como membros. 3. adicione uma conta financeira para ana paula: uma \"conta corrente\" com saldo de r$ 30.000,00. 4. verifique o patrimônio líquido agregado da \"família eduardo\" e o progresso das metas financeiras familiares.   solução:   1. criação da pessoa (ana paula) e relacionamento:      * crie uma nova pessoa para ana paula.    * na página de carlos eduardo, vá para a seção relacionamentos.    * clique em novo relacionamento.    * conecte carlos eduardo a ana paula e defina o tipo de relacionamento como cônjuge.    * clique em salvar.   2. criação do grupo e adição de membros:      * na barra de navegação, clique em grupos.    * clique em novo.    * preencha nome do grupo: família eduardo.    * clique em salvar.    * na página do grupo \"família eduardo\", vá para a seção membros do grupo.    * adicione carlos eduardo e ana paula como membros.   3. adicionar conta financeira para ana paula:      * na página de ana paula, vá para a seção contas financeiras.    * clique em novo.    * preencha tipo de conta financeira: conta corrente.    * preencha nome da conta financeira: conta corrente ana paula.    * preencha saldo: 30000.    * clique em salvar.   4. verificar patrimônio líquido e metas agregadas:      * na página do grupo \"família eduardo\", observe as seções que agregam o patrimônio líquido e as metas financeiras de todos os membros. (essas seções são automaticamente calculadas pelo fsc com base nas contas financeiras e metas dos membros do grupo). recursos para intermediários: * trailhead: módulos \"financial services cloud for wealth management\", \"financial services cloud for banking\". * ajuda salesforce: guias sobre grupos, arc e automação de processos financeiros. nível especialista: otimização e estratégia no financial services cloud objetivo: dominar a personalização avançada, a integração com sistemas legados, a conformidade regulatória e a aplicação de inteligência artificial para impulsionar o crescimento e a eficiência no setor financeiro. tópicos avançados e estratégicos: * einstein for financial services cloud: aprofunde-se nos recursos de ia, como:    * einstein next best action: recomende as próximas melhores ações para consultores e agentes com base no perfil do cliente, histórico e metas financeiras.    * einstein prediction builder: crie previsões personalizadas para o setor financeiro (ex: probabilidade de um cliente aceitar uma oferta de empréstimo, risco de churn).    * einstein discovery: analise grandes volumes de dados financeiros para descobrir insights e padrões ocultos que podem informar estratégias de negócios. * integração com sistemas core banking/seguros (mulesoft, apis): entenda como o fsc se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente. * gerenciamento de conformidade e auditoria: implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: kyc - know your customer, aml - anti-money laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento. * personalização da experiência do cliente (digital engagement): utilize o fsc para criar experiências digitais personalizadas para clientes financeiros, incluindo portais de autoatendimento, aplicativos móveis e comunicações proativas. * gerenciamento de sinistros (claims management): (para seguros) otimize o processo de gerenciamento de sinistros, desde a notificação até a liquidação, com automação e visibilidade. * planejamento financeiro abrangente: utilize o fsc para suportar processos de planejamento financeiro mais complexos, incluindo análise de risco, modelagem de cenários e recomendações de portfólio. * salesforce shield para fsc: entenda as capacidades de segurança avançada, como criptografia de plataforma, monitoramento de eventos e auditoria de campo, essenciais para dados financeiros sensíveis. estudo de caso avançado: personalização de ofertas com einstein next best action cenário: um banco deseja oferecer produtos financeiros personalizados aos seus clientes no momento certo, com base em seus dados e eventos de vida, para aumentar a aquisição e a retenção.   tarefa:   1. configure o einstein next best action para recomendar produtos (ex: empréstimo imobiliário, plano de investimento) com base em eventos de vida (ex: casamento, nascimento de filho) e dados financeiros do cliente. 2. exiba essas recomendações no console do agente de serviço financeiro e no portal do cliente.   solução:   1. configuração do einstein next best action:      * navegue até configuração (setup).    * na caixa de pesquisa rápida, digite next best action e selecione.    * crie uma nova estratégia.    * defina as recomendações (ex: empréstimo imobiliário, plano de previdência privada).    * crie fluxos para cada recomendação que o agente pode iniciar (ex: fluxo de solicitação de empréstimo imobiliário).    * defina as regras para quando cada recomendação deve ser exibida (ex: se o cliente tem uma meta de 'comprar imóvel' e o saldo da conta poupança é inferior a x, recomendar empréstimo imobiliário).    * use dados do fsc (contas financeiras, metas financeiras, eventos de vida) como entrada para as regras.   2. exibição das recomendações:      * no console do agente de serviço financeiro, adicione o componente next best action ao layout da página da pessoa ou conta.    * no portal do cliente (experience cloud), adicione o componente next best action à página inicial ou a uma página de perfil do cliente.   resultados esperados: os agentes financeiros recebem recomendações inteligentes e contextuais, permitindo que ofereçam produtos e serviços mais relevantes aos clientes. os clientes, por sua vez, veem ofertas personalizadas em seus portais, melhorando o engajamento e a probabilidade de aceitação. isso leva a um aumento na aquisição de produtos e na satisfação do cliente. recursos para especialistas: * trailhead: módulos \"einstein next best action\", \"financial services cloud integration\". * documentação da salesforce: guias de implementação e melhores práticas para einstein para fsc, mulesoft e conformidade regulatóriatória. recursos adicionais e próximos passos para aprofundar ainda mais seus conhecimentos no ecossistema salesforce e em suas diversas clouds, recomendamos os seguintes recursos e próximos passos: 1. trailhead: a plataforma de aprendizado da salesforce o trailhead é a plataforma de aprendizado online gratuita da salesforce, que oferece trilhas de aprendizado gamificadas sobre todos os produtos e funcionalidades da salesforce. é o recurso mais recomendado para aprender de forma prática e interativa.   * trilhas e módulos específicos: busque por módulos e trilhas relacionados a sales cloud, service cloud, marketing cloud engagement, financial services cloud e customer 360. existem conteúdos para todos os níveis, do iniciante ao especialista. * projetos e superbadges: complete projetos práticos e superbadges para aplicar seus conhecimentos em cenários reais e demonstrar suas habilidades. 2. documentação oficial da salesforce (salesforce help) a documentação oficial da salesforce é uma fonte rica e detalhada de informações sobre todas as funcionalidades, configurações e melhores práticas.   * guias de implementação: consulte os guias de implementação para cada cloud para entender os passos detalhados de configuração e personalização. * notas de versão (release notes): mantenha-se atualizado com as últimas funcionalidades e melhorias que a salesforce lança três vezes ao ano (spring, summer, winter). 3. comunidade salesforce (trailblazer community) a comunidade trailblazer é um espaço onde usuários, administradores, desenvolvedores e parceiros da salesforce podem se conectar, fazer perguntas, compartilhar conhecimentos e resolver problemas.   * grupos de usuários: participe de grupos de usuários específicos para cada cloud ou para tópicos de interesse. * fóruns de perguntas e respostas: utilize os fóruns para buscar soluções para desafios específicos ou para ajudar outros membros da comunidade. 4. certificações salesforce as certificações salesforce são uma excelente forma de validar seus conhecimentos e habilidades na plataforma. considere buscar certificações relevantes para sua área de interesse:   * sales cloud consultant / administrator: para profissionais focados em vendas. * service cloud consultant / administrator: para profissionais focados em atendimento ao cliente. * marketing cloud email specialist / administrator / developer: para profissionais de marketing digital. * financial services cloud accredited professional: para profissionais do setor financeiro. 5. blogs e canais do youtube especializados existem diversos blogs e canais do youtube mantidos por especialistas da salesforce que oferecem tutoriais, dicas e análises aprofundadas sobre a plataforma. 6. eventos e conferências participe de eventos como o dreamforce (conferência anual da salesforce), world tours e eventos locais da comunidade para aprender sobre as últimas tendências, fazer networking e se inspirar. conclusão o ecossistema salesforce é vasto e em constante evolução. este guia forneceu uma base sólida para entender as principais clouds e como elas se interligam para oferecer uma visão 360 graus do cliente. o aprendizado contínuo, a prática e o engajamento com a comunidade são essenciais para dominar a plataforma e impulsionar o sucesso em sua carreira e em sua organização.  "
  }
];
export const quizBank = [
  {
    "question": "O que é * Custom Sound/Alerts?",
    "options": [
      "Verificar a reputação do IP de envio e do domínio através de ferramentas como SenderScore.org ou Google Postmaster Tools, pois altas taxas de bounce podem prejudicá-la.",
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis.",
      "Configurar sons personalizados para notificações.",
      "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs."
    ],
    "answer": "Configurar sons personalizados para notificações."
  },
  {
    "question": "O que é * Audit Trail?",
    "options": [
      "Conta quantas linhas foram retornadas pela busca.",
      "Acesso operacional à respectiva Child BU (criar/editar emails, jornadas, automações) e acesso de visualização a recursos compartilhados",
      "Personalização de Ofertas com Einstein Next Best Action",
      "Rastrear alterações de configuração que podem ter causado um problema."
    ],
    "answer": "Rastrear alterações de configuração que podem ter causado um problema."
  },
  {
    "question": "O que é * API Event?",
    "options": [
      "Adiciona contatos via chamada de API externa (ex: após uma compra no site).",
      "70].",
      "Configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no Sales Cloud).",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B)."
    ],
    "answer": "Adiciona contatos via chamada de API externa (ex: após uma compra no site)."
  },
  {
    "question": "O que é * Studio?",
    "options": [
      "Read",
      "Usar os insights dos relatórios para otimizar assuntos, conteúdo, CTAs, segmentação, frequência, horário de envio e estratégias gerais.",
      "Módulo focado em um canal (Email Studio, Mobile Studio, Social Studio, Advertising Studio).",
      "A empresa de e-commerce \"ShopSmart\" precisa automatizar o processo diário de importação de dados de clientes e transações do seu sistema ERP para o Marketing Cloud, seguido por segmentação para campanhas. Os dados chegam diariamente às 3h da manhã em um servidor SFTP como arquivos CSV separados:"
    ],
    "answer": "Módulo focado em um canal (Email Studio, Mobile Studio, Social Studio, Advertising Studio)."
  },
  {
    "question": "O que é 6. Monitorar Reputação?",
    "options": [
      "Novo.",
      "Módulo focado em um canal (Email Studio, Mobile Studio, Social Studio, Advertising Studio).",
      "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud.",
      "Verificar a reputação do IP de envio e do domínio através de ferramentas como SenderScore.org ou Google Postmaster Tools, pois altas taxas de bounce podem prejudicá-la."
    ],
    "answer": "Verificar a reputação do IP de envio e do domínio através de ferramentas como SenderScore.org ou Google Postmaster Tools, pois altas taxas de bounce podem prejudicá-la."
  },
  {
    "question": "O que é * Barra de Navegação?",
    "options": [
      "(Entregues / Enviados) * 100. Indica a saúde da lista e a reputação do remetente.",
      "Rastrear alterações de configuração que podem ter causado um problema.",
      "Acesso rápido a objetos como Casos, Contas, Contatos, Artigos, etc.",
      "Uma pessoa associada a uma Conta. Contatos são os indivíduos com quem os vendedores interagem dentro de uma empresa."
    ],
    "answer": "Acesso rápido a objetos como Casos, Contas, Contatos, Artigos, etc."
  },
  {
    "question": "O que é * Opens (Aberturas)?",
    "options": [
      "Configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no Sales Cloud).",
      "Número de vezes que o email foi aberto (rastreado por um pixel invisível).",
      "A empresa de e-commerce \"ShopSmart\" precisa automatizar o processo diário de importação de dados de clientes e transações do seu sistema ERP para o Marketing Cloud, seguido por segmentação para campanhas. Os dados chegam diariamente às 3h da manhã em um servidor SFTP como arquivos CSV separados:",
      "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar."
    ],
    "answer": "Número de vezes que o email foi aberto (rastreado por um pixel invisível)."
  },
  {
    "question": "O que é * Preencha Prioridade?",
    "options": [
      "EmailAddress, Length: 254)",
      "Média.",
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)",
      "Executa consultas SQL para segmentar dados."
    ],
    "answer": "Média."
  },
  {
    "question": "O que é * Pesquisa Global (Global Search)?",
    "options": [
      "Comma",
      "Permite que as equipes de vendas colaborem em tempo real, compartilhem atualizações e fechem negócios mais rapidamente.",
      "Encontre rapidamente qualquer registro na plataforma.",
      "Configuração das Jornadas/Campanhas"
    ],
    "answer": "Encontre rapidamente qualquer registro na plataforma."
  },
  {
    "question": "O que é * Preencha Saldo?",
    "options": [
      "50000.",
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)",
      "Embora mais comum para Soft Bounces, bloqueios severos ou problemas de reputação podem, em alguns casos, ser reportados como Hard Bounces por certos ISPs.",
      "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões)."
    ],
    "answer": "50000."
  },
  {
    "question": "O que é * Lead Capture?",
    "options": [
      "Configurar notificações por email para administradores quando uma automação falha.",
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "Configurar a captura de leads de anúncios do Facebook ou Google diretamente para Data Extensions ou Sales Cloud.",
      "["
    ],
    "answer": "Configurar a captura de leads de anúncios do Facebook ou Google diretamente para Data Extensions ou Sales Cloud."
  },
  {
    "question": "O que é * Feature Settings?",
    "options": [
      "um gráfico de barras mostrando leads por pontuação, um medidor para oportunidades de alto valor).",
      "Utilizar conectores pré-construídos para integrar com plataformas populares.",
      "Um negócio potencial que você está tentando fechar. Oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas.",
      "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs."
    ],
    "answer": "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs."
  },
  {
    "question": "O que é 1. Preparar o Email?",
    "options": [
      "Acesse informações e gerencie atividades de vendas de qualquer lugar, a qualquer hora, através de dispositivos móveis.",
      "Número de vezes que o email foi aberto (rastreado por um pixel invisível).",
      "Módulo \"Financial Services Cloud Basics\".",
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará."
    ],
    "answer": "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará."
  },
  {
    "question": "O que é \"defaultValue\"?",
    "options": [
      "Uma pessoa associada a uma Conta. Contatos são os indivíduos com quem os vendedores interagem dentro de uma empresa.",
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)",
      "Esta automação segue um fluxo lógico de importação, processamento e segmentação de dados. Primeiro, importa os arquivos do SFTP para o Marketing Cloud. Em seguida, processa os dados de clientes e transações, atualizando as DEs principais. Depois, executa consultas SQL para segmentar os clientes em três grupos distintos para diferentes campanhas. A automação é agendada para rodar diariamente após a chegada esperada dos arquivos. As jornadas e campanhas subsequentes são configuradas para usar as DEs de segmentação como fontes de entrada.",
      "false"
    ],
    "answer": "false"
  },
  {
    "question": "O que é 5. Monitoramento contínuo?",
    "options": [
      "Import File",
      "A implementação de dashboards de monitoramento permitiu identificar problemas rapidamente e fazer ajustes.",
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "Selecione \"Subject Line\" (Linha de Assunto)."
    ],
    "answer": "A implementação de dashboards de monitoramento permitiu identificar problemas rapidamente e fazer ajustes."
  },
  {
    "question": "O que é * Membros?",
    "options": [
      "Equipe global de análise de marketing",
      "Fornecer uma base de dados rica e insights acionáveis que permitem às empresas inovar em produtos, serviços e estratégias de engajamento.",
      "Declara as variáveis que serão usadas.",
      "false"
    ],
    "answer": "Equipe global de análise de marketing"
  },
  {
    "question": "O que é * API?",
    "options": [
      "Enviar para listas compradas, antigas ou com muitos endereços inválidos prejudica gravemente a reputação e a entregabilidade. Focar em listas opt-in (preferencialmente double opt-in) é essencial.",
      "Entenda como o FSC se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente.",
      "\"Ofertas Exclusivas para Membros Gold!\"",
      "Utilizar as APIs REST e SOAP do Marketing Cloud para integrar dados de sistemas externos."
    ],
    "answer": "Utilizar as APIs REST e SOAP do Marketing Cloud para integrar dados de sistemas externos."
  },
  {
    "question": "O que é Nível Intermediário?",
    "options": [
      "Encontre rapidamente qualquer registro na plataforma.",
      "Ferramentas para rastrear e gerenciar referências internas e externas, garantindo que as oportunidades de negócios sejam encaminhadas e acompanhadas adequadamente.",
      "Limitar o acesso à conta a partir de faixas de IP confiáveis.",
      "Aprofundamento e Aplicação no Financial Services Cloud"
    ],
    "answer": "Aprofundamento e Aplicação no Financial Services Cloud"
  },
  {
    "question": "O que é 4. Relatórios Consolidados?",
    "options": [
      "Usar as APIs REST/SOAP do Marketing Cloud para enviar dados do e-commerce em tempo real ou em lote.",
      "Aprofundamento e Aplicação no Sales Cloud",
      "Criar dashboards unificados para todas as campanhas",
      "Uma abordagem onde dados sensíveis são substituídos por tokens antes de serem enviados para o Marketing Cloud. Os dados reais permanecem no sistema de origem seguro. O Marketing Cloud usa os tokens para personalização e, no momento do envio, pode (em alguns cenários) buscar os dados reais via API ou o sistema receptor pode reidratar os dados."
    ],
    "answer": "Criar dashboards unificados para todas as campanhas"
  },
  {
    "question": "O que é * Casos de Uso?",
    "options": [
      "Acesse informações e gerencie atividades de vendas de qualquer lugar, a qualquer hora, através de dispositivos móveis.",
      "Sugira respostas prontas para agentes com base no histórico de conversas e no contexto do caso.",
      "Confirmação de pedido, redefinição de senha, notificação de envio, alerta de conta, confirmação de inscrição (single opt-in).",
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone)."
    ],
    "answer": "Confirmação de pedido, redefinição de senha, notificação de envio, alerta de conta, confirmação de inscrição (single opt-in)."
  },
  {
    "question": "O que é 6. Agendar ou Enviar?",
    "options": [
      "Adiciona contatos quando são adicionados ou atualizados em uma DE.",
      "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs.",
      "Agende o envio para a data/hora desejada ou envie imediatamente.",
      "Declara as variáveis que serão usadas."
    ],
    "answer": "Agende o envio para a data/hora desejada ou envie imediatamente."
  },
  {
    "question": "O que é 3. Adicione uma Conta Financeira para Ana Paula?",
    "options": [
      "Create, Read, Update, Delete",
      "Uma alta taxa de Hard Bounce, especialmente em listas antigas, indica problemas com a qualidade e validade dos endereços. A ação principal é focar na higiene da lista, removendo endereços inválidos e inativos, e revisando os processos de coleta para evitar a entrada de emails ruins. O monitoramento contínuo e estratégias de reengajamento cuidadosas são essenciais para manter a saúde da lista e a entregabilidade.",
      "uma \"Conta Corrente\" com saldo de R$ 30.000,00.",
      "Adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho."
    ],
    "answer": "uma \"Conta Corrente\" com saldo de R$ 30.000,00."
  },
  {
    "question": "O que é * Pesquisa Global?",
    "options": [
      "Configuração de domínios de envio dedicados, IPs dedicados (opcional), autenticação DKIM/SPF, e wrapping de links/imagens para melhorar a entregabilidade e o branding.",
      "Um negócio potencial que você está tentando fechar. Oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas.",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados.",
      "Encontre rapidamente qualquer registro na plataforma."
    ],
    "answer": "Encontre rapidamente qualquer registro na plataforma."
  },
  {
    "question": "O que é Fase 3?",
    "options": [
      "Recursos e casos de uso (Dia 2)",
      "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs.",
      "Gerenciar pacotes de API, definindo escopos de permissão específicos para cada integração.",
      "Migração de Dados (Semanas 9-12)"
    ],
    "answer": "Migração de Dados (Semanas 9-12)"
  },
  {
    "question": "O que é Guia Completo de Estudo?",
    "options": [
      "Salesforce Marketing Cloud Engagement (Aprofundado)",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B).",
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone).",
      "["
    ],
    "answer": "Salesforce Marketing Cloud Engagement (Aprofundado)"
  },
  {
    "question": "O que é * Engajamento do Assinante?",
    "options": [
      "Encontre rapidamente qualquer registro na plataforma.",
      "Garantir que as funções dos usuários tenham as permissões corretas para usar as diferentes atividades do Journey Builder.",
      "ISPs monitoram se os destinatários abrem, clicam, marcam como importantes ou movem emails para a caixa de entrada. Alto engajamento sinaliza que os emails são desejados.",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:"
    ],
    "answer": "ISPs monitoram se os destinatários abrem, clicam, marcam como importantes ou movem emails para a caixa de entrada. Alto engajamento sinaliza que os emails são desejados."
  },
  {
    "question": "O que é * Adicione componentes de painel baseados nos relatórios que você criou (ex?",
    "options": [
      "um gráfico de barras mostrando leads por pontuação, um medidor para oportunidades de alto valor).",
      "A empresa estava enviando o mesmo email para toda a base, sem considerar o histórico de compras, interesses ou nível de engajamento.",
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "Configurar notificações por email para administradores quando uma automação falha."
    ],
    "answer": "um gráfico de barras mostrando leads por pontuação, um medidor para oportunidades de alto valor)."
  },
  {
    "question": "O que é * Atribuir a?",
    "options": [
      "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades.",
      "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante.",
      "Deixe o Einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento.",
      "Fila Fila de Suporte Geral (crie esta fila se não existir)."
    ],
    "answer": "Fila Fila de Suporte Geral (crie esta fila se não existir)."
  },
  {
    "question": "O que é * Personalizem a Comunicação?",
    "options": [
      "Limitar o acesso à conta a partir de faixas de IP confiáveis.",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics).",
      "Entreguem mensagens e ofertas personalizadas em escala, no canal certo e no momento certo.",
      "Criar dashboards unificados para todas as campanhas"
    ],
    "answer": "Entreguem mensagens e ofertas personalizadas em escala, no canal certo e no momento certo."
  },
  {
    "question": "O que é * Content Builder Settings?",
    "options": [
      "Automações e Jornadas (Semanas 17-20)",
      "Gerencia importações/exportações e segmentação, mas não cria conteúdo",
      "Ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados.",
      "Configurar opções de compartilhamento de conteúdo entre BUs."
    ],
    "answer": "Configurar opções de compartilhamento de conteúdo entre BUs."
  },
  {
    "question": "O que é * Service Cloud e Marketing Cloud?",
    "options": [
      "O histórico de serviço pode ser usado para personalizar campanhas de marketing, segmentar clientes com base em suas necessidades de suporte e enviar comunicações relevantes. O Marketing Cloud pode ser usado para enviar pesquisas de satisfação pós-atendimento.",
      "Um negócio potencial que você está tentando fechar. Oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas.",
      "Selecione \"Subject Line\" (Linha de Assunto).",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento."
    ],
    "answer": "O histórico de serviço pode ser usado para personalizar campanhas de marketing, segmentar clientes com base em suas necessidades de suporte e enviar comunicações relevantes. O Marketing Cloud pode ser usado para enviar pesquisas de satisfação pós-atendimento."
  },
  {
    "question": "O que é 3. Automação Avançada?",
    "options": [
      "Cria emails e landing pages, mas não deve enviar emails ou acessar dados sensíveis",
      "Uma abordagem onde dados sensíveis são substituídos por tokens antes de serem enviados para o Marketing Cloud. Os dados reais permanecem no sistema de origem seguro. O Marketing Cloud usa os tokens para personalização e, no momento do envio, pode (em alguns cenários) buscar os dados reais via API ou o sistema receptor pode reidratar os dados.",
      "Documentação oficial sobre cada Studio e Builder.",
      "Implementar jornadas de cliente baseadas em comportamento"
    ],
    "answer": "Implementar jornadas de cliente baseadas em comportamento"
  },
  {
    "question": "O que é * Espera?",
    "options": [
      "Configuração e Integração (Semanas 5-8)",
      "4 dias",
      "Boas-vindas e introdução (Dia 0)",
      "Ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados."
    ],
    "answer": "4 dias"
  },
  {
    "question": "O que é 1. Trailhead?",
    "options": [
      "Adiciona contatos quando são adicionados ou atualizados em uma DE.",
      "A Plataforma de Aprendizado da Salesforce",
      "Entreguem mensagens e ofertas personalizadas em escala, no canal certo e no momento certo.",
      "Gerencia importações/exportações e segmentação, mas não cria conteúdo"
    ],
    "answer": "A Plataforma de Aprendizado da Salesforce"
  },
  {
    "question": "O que é * Error Handling?",
    "options": [
      "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas.",
      "Configurar notificações por email para administradores quando uma automação falha.",
      "Configurar opções de compartilhamento de conteúdo entre BUs.",
      "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs."
    ],
    "answer": "Configurar notificações por email para administradores quando uma automação falha."
  },
  {
    "question": "O que é * Preencha Status?",
    "options": [
      "Documentação oficial sobre cada Studio e Builder.",
      "Novo.",
      "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar.",
      "Utilizar as APIs REST e SOAP do Marketing Cloud para integrar dados de sistemas externos."
    ],
    "answer": "Novo."
  },
  {
    "question": "O que é * Impulsionar a Inovação?",
    "options": [
      "(Deixe como Off por enquanto, ou configure se necessário).",
      "Recursos e casos de uso (Dia 2)",
      "Um novo cliente se inscreve na newsletter da TechGadgets através de um formulário no site. A empresa quer enviar uma série de 2 emails de boas-vindas.",
      "Fornecer uma base de dados rica e insights acionáveis que permitem às empresas inovar em produtos, serviços e estratégias de engajamento."
    ],
    "answer": "Fornecer uma base de dados rica e insights acionáveis que permitem às empresas inovar em produtos, serviços e estratégias de engajamento."
  },
  {
    "question": "O que é * Validação?",
    "options": [
      "Salesforce Marketing Cloud Engagement (Aprofundado)",
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone).",
      "Receita total gerada / Número de emails entregues.",
      "um gráfico de barras mostrando leads por pontuação, um medidor para oportunidades de alto valor)."
    ],
    "answer": "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone)."
  },
  {
    "question": "O que é * Funções Padrão?",
    "options": [
      "Verificar se as restrições de IP também se aplicam a usuários de API e, se necessário, adicionar os IPs dos servidores que farão as chamadas de API à lista.",
      "Implementar jornadas de cliente baseadas em comportamento",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:",
      "Confirmação de pedido, redefinição de senha, notificação de envio, alerta de conta, confirmação de inscrição (single opt-in)."
    ],
    "answer": "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:"
  },
  {
    "question": "O que é Cenário?",
    "options": [
      "\"Ofertas Exclusivas para Membros Gold!\"",
      "Rastrear alterações de configuração que podem ter causado um problema.",
      "Receita total gerada / Número de emails entregues.",
      "A empresa de e-commerce \"ShopSmart\" precisa automatizar o processo diário de importação de dados de clientes e transações do seu sistema ERP para o Marketing Cloud, seguido por segmentação para campanhas. Os dados chegam diariamente às 3h da manhã em um servidor SFTP como arquivos CSV separados:"
    ],
    "answer": "A empresa de e-commerce \"ShopSmart\" precisa automatizar o processo diário de importação de dados de clientes e transações do seu sistema ERP para o Marketing Cloud, seguido por segmentação para campanhas. Os dados chegam diariamente às 3h da manhã em um servidor SFTP como arquivos CSV separados:"
  },
  {
    "question": "O que é * Subscribers?",
    "options": [
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "Read",
      "Limitar o acesso à conta a partir de faixas de IP confiáveis.",
      "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões)."
    ],
    "answer": "Read"
  },
  {
    "question": "O que é * Tokenized Sending?",
    "options": [
      "Uma abordagem onde dados sensíveis são substituídos por tokens antes de serem enviados para o Marketing Cloud. Os dados reais permanecem no sistema de origem seguro. O Marketing Cloud usa os tokens para personalização e, no momento do envio, pode (em alguns cenários) buscar os dados reais via API ou o sistema receptor pode reidratar os dados.",
      "Acesso rápido a objetos como Casos, Contas, Contatos, Artigos, etc.",
      "Confirmação de pedido, redefinição de senha, notificação de envio, alerta de conta, confirmação de inscrição (single opt-in).",
      "Rastrear alterações de configuração que podem ter causado um problema."
    ],
    "answer": "Uma abordagem onde dados sensíveis são substituídos por tokens antes de serem enviados para o Marketing Cloud. Os dados reais permanecem no sistema de origem seguro. O Marketing Cloud usa os tokens para personalização e, no momento do envio, pode (em alguns cenários) buscar os dados reais via API ou o sistema receptor pode reidratar os dados."
  },
  {
    "question": "O que é * Send Logging?",
    "options": [
      "Import File",
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "false",
      "\"parent_bu_mid_here\","
    ],
    "answer": "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas."
  },
  {
    "question": "O que é * Installed Packages?",
    "options": [
      "Sentimos sua falta",
      "Gerenciar pacotes de API, definindo escopos de permissão específicos para cada integração.",
      "O produto X não está funcionando conforme o esperado..",
      "Deixe o Einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento."
    ],
    "answer": "Gerenciar pacotes de API, definindo escopos de permissão específicos para cada integração."
  },
  {
    "question": "O que é * Barra de Navegação (Navigation Bar)?",
    "options": [
      "O histórico de serviço pode ser usado para personalizar campanhas de marketing, segmentar clientes com base em suas necessidades de suporte e enviar comunicações relevantes. O Marketing Cloud pode ser usado para enviar pesquisas de satisfação pós-atendimento.",
      "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas.",
      "Traga dados do Sales/Service Cloud (Contatos, Leads, Contas, Objetos Personalizados) para o Marketing Cloud para segmentação.",
      "Acesso rápido a objetos e funcionalidades como Leads, Contas, Oportunidades, Tarefas, etc."
    ],
    "answer": "Acesso rápido a objetos e funcionalidades como Leads, Contas, Oportunidades, Tarefas, etc."
  },
  {
    "question": "O que é * Data Extension (DE)?",
    "options": [
      "Configurar opções de compartilhamento de conteúdo entre BUs.",
      "Compreenda como estender a funcionalidade do Sales Cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas.",
      "Tabelas para armazenar dados. Pense nelas como planilhas ou tabelas de banco de dados. São a base para segmentação e personalização.",
      "Exibe o preço formatado como moeda brasileira."
    ],
    "answer": "Tabelas para armazenar dados. Pense nelas como planilhas ou tabelas de banco de dados. São a base para segmentação e personalização."
  },
  {
    "question": "O que é Cenário?",
    "options": [
      "A equipe de marketing da TechGadgets quer testar duas linhas de assunto para um email promocional de um novo smartwatch para determinar qual gera a maior taxa de abertura única (Unique Open Rate).",
      "Você precisa armazenar informações básicas de novos leads coletados em um evento. Os dados incluem Nome, Sobrenome, Email e Empresa.",
      "Módulos \"Financial Services Cloud for Wealth Management\", \"Financial Services Cloud for Banking\".",
      "Encontre rapidamente qualquer registro na plataforma."
    ],
    "answer": "Você precisa armazenar informações básicas de novos leads coletados em um evento. Os dados incluem Nome, Sobrenome, Email e Empresa."
  },
  {
    "question": "O que é 4. Arraste campos para as colunas do relatório e adicione filtros (ex?",
    "options": [
      "HubSpot usado pela segunda empresa adquirida",
      "\"Contact_Master\",",
      "Você precisa armazenar informações básicas de novos leads coletados em um evento. Os dados incluem Nome, Sobrenome, Email e Empresa.",
      "Estágio da Oportunidade = 'Fechado Ganho')."
    ],
    "answer": "Estágio da Oportunidade = 'Fechado Ganho')."
  },
  {
    "question": "O que é 3. Preencha os detalhes da Conta Financeira (ex?",
    "options": [
      "Tipo de Conta: Conta Corrente, Nome da Conta: Conta Corrente Principal, Saldo: R$ 10.000,00).",
      "Obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais.",
      "Otimização e Estratégia no Service Cloud",
      "Boas-vindas e introdução (Dia 0)"
    ],
    "answer": "Tipo de Conta: Conta Corrente, Nome da Conta: Conta Corrente Principal, Saldo: R$ 10.000,00)."
  },
  {
    "question": "O que é * Planejamento Financeiro Abrangente?",
    "options": [
      "Utilize o FSC para suportar processos de planejamento financeiro mais complexos, incluindo análise de risco, modelagem de cenários e recomendações de portfólio.",
      "Monitorar métricas de entregabilidade (bounces, spam complaints) e reputação de envio.",
      "O produto X não está funcionando conforme o esperado..",
      "4 dias"
    ],
    "answer": "Utilize o FSC para suportar processos de planejamento financeiro mais complexos, incluindo análise de risco, modelagem de cenários e recomendações de portfólio."
  },
  {
    "question": "O que é Exercício 1?",
    "options": [
      "Monitore o desempenho do atendimento ao cliente com relatórios e dashboards personalizáveis, analisando métricas como tempo médio de resolução, satisfação do cliente e volume de casos.",
      "Configuração de Business Units",
      "Utilizar conectores pré-construídos para integrar com plataformas populares.",
      "A equipe de marketing da TechGadgets quer testar duas linhas de assunto para um email promocional de um novo smartwatch para determinar qual gera a maior taxa de abertura única (Unique Open Rate)."
    ],
    "answer": "Configuração de Business Units"
  },
  {
    "question": "O que é * Email 1?",
    "options": [
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis.",
      "Boas-vindas e introdução (Dia 0)",
      "SubscriberKey (Text, Primary Key), EmailAddress (EmailAddress), FirstName (Text), LastName (Text), CompanyName (Text)",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B)."
    ],
    "answer": "Boas-vindas e introdução (Dia 0)"
  },
  {
    "question": "O que é * API Users?",
    "options": [
      "Torne o processo de cancelamento simples e rápido.",
      "Desempenho geral de envios em um período.",
      "Rastreie e gerencie referências de negócios dentro e fora da instituição, garantindo que as oportunidades sejam encaminhadas e acompanhadas de forma eficiente.",
      "Verificar se as restrições de IP também se aplicam a usuários de API e, se necessário, adicionar os IPs dos servidores que farão as chamadas de API à lista."
    ],
    "answer": "Verificar se as restrições de IP também se aplicam a usuários de API e, se necessário, adicionar os IPs dos servidores que farão as chamadas de API à lista."
  },
  {
    "question": "O que é Exercício 4?",
    "options": [
      "Avalie a probabilidade de uma oportunidade ser ganha.",
      "Jornada de Boas-Vindas Simples",
      "Salesforce Marketing Cloud Engagement (Aprofundado)",
      "Permite criptografar campos específicos dentro de Data Extensions que contenham dados sensíveis (PII - Personally Identifiable Information). Requer configuração e gerenciamento de chaves. Os dados criptografados não podem ser usados diretamente em segmentações ou personalização sem descriptografia (geralmente via script)."
    ],
    "answer": "Jornada de Boas-Vindas Simples"
  },
  {
    "question": "O que é * Unique Opens (Aberturas Únicas)?",
    "options": [
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B).",
      "Número de destinatários únicos que abriram o email.",
      "EmailAddress, Length: 254)",
      "Cria emails e landing pages, mas não deve enviar emails ou acessar dados sensíveis"
    ],
    "answer": "Número de destinatários únicos que abriram o email."
  },
  {
    "question": "O que é Passo 3?",
    "options": [
      "Configuração das Jornadas/Campanhas",
      "Adiciona contatos via chamada de API externa (ex: após uma compra no site).",
      "Agende o envio para a data/hora desejada ou envie imediatamente.",
      "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades."
    ],
    "answer": "Configuração das Jornadas/Campanhas"
  },
  {
    "question": "O que é 2.2. Nível Intermediário?",
    "options": [
      "Entenda como o FSC se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente.",
      "Permite que as equipes de vendas colaborem em tempo real, compartilhem atualizações e fechem negócios mais rapidamente.",
      "Novo.",
      "Aprofundamento e Aplicação no Sales Cloud"
    ],
    "answer": "Aprofundamento e Aplicação no Sales Cloud"
  },
  {
    "question": "O que é * Propósito?",
    "options": [
      "Número de vezes que o email foi aberto (rastreado por um pixel invisível).",
      "Conector nativo e bidirecional entre Marketing Cloud e Sales Cloud/Service Cloud.",
      "_spf.salesforce.com include:_spf.multitech.com ~all",
      "Entenda como o FSC oferece modelos de processos pré-construídos para abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e outras operações financeiras."
    ],
    "answer": "Conector nativo e bidirecional entre Marketing Cloud e Sales Cloud/Service Cloud."
  },
  {
    "question": "O que é * Atividade 4?",
    "options": [
      "Módulo \"Financial Services Cloud Basics\".",
      "\"LastModified\",",
      "Novo.",
      "Import File"
    ],
    "answer": "Import File"
  },
  {
    "question": "O que é * Integração com Sistemas Core Banking/Seguros (MuleSoft, APIs)?",
    "options": [
      "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud.",
      "Um negócio potencial que você está tentando fechar. Oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas.",
      "Entenda como o FSC se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente.",
      "Aprofundamento e Aplicação no Financial Services Cloud"
    ],
    "answer": "Entenda como o FSC se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente."
  },
  {
    "question": "O que é \"customerKey\"?",
    "options": [
      "Fluxos de trabalho e automações pré-configurados para processos comuns do setor financeiro, como integração de novos clientes, solicitações de empréstimos e gerenciamento de sinistros.",
      "Text, Length: 100, Nullable: Yes)",
      "Adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho.",
      "\"Contact_Master\","
    ],
    "answer": "\"Contact_Master\","
  },
  {
    "question": "O que é * Configuração no Marketing Cloud?",
    "options": [
      "Quais são as possíveis causas para essa alta taxa de Hard Bounce e quais ações um Email Specialist deve tomar para investigar e mitigar o problema?",
      "O histórico de serviço pode ser usado para personalizar campanhas de marketing, segmentar clientes com base em suas necessidades de suporte e enviar comunicações relevantes. O Marketing Cloud pode ser usado para enviar pesquisas de satisfação pós-atendimento.",
      "O Marketing Cloud auxilia na configuração desses protocolos através do Sender Authentication Package (SAP) ou gerenciamento de Private Domains.",
      "Enviar para listas compradas, antigas ou com muitos endereços inválidos prejudica gravemente a reputação e a entregabilidade. Focar em listas opt-in (preferencialmente double opt-in) é essencial."
    ],
    "answer": "O Marketing Cloud auxilia na configuração desses protocolos através do Sender Authentication Package (SAP) ou gerenciamento de Private Domains."
  },
  {
    "question": "O que é * Journey Builder?",
    "options": [
      "Migração de Dados (Semanas 9-12)",
      "Gerenciar pacotes de API, definindo escopos de permissão específicos para cada integração.",
      "Ferramenta central para projetar e automatizar jornadas de cliente 1:1 em múltiplos canais e pontos de contato. Permite criar fluxos baseados em gatilhos e comportamentos do cliente.",
      "Ajuda a garantir que as interações e processos estejam em conformidade com as regulamentações do setor, com registros detalhados e trilhas de auditoria."
    ],
    "answer": "Ferramenta central para projetar e automatizar jornadas de cliente 1:1 em múltiplos canais e pontos de contato. Permite criar fluxos baseados em gatilhos e comportamentos do cliente."
  },
  {
    "question": "O que é * Trailhead?",
    "options": [
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas.",
      "Módulos \"Financial Services Cloud for Wealth Management\", \"Financial Services Cloud for Banking\".",
      "50000.",
      "Verificar se as restrições de IP também se aplicam a usuários de API e, se necessário, adicionar os IPs dos servidores que farão as chamadas de API à lista."
    ],
    "answer": "Módulos \"Financial Services Cloud for Wealth Management\", \"Financial Services Cloud for Banking\"."
  },
  {
    "question": "O que é * Rodapé (Footer)?",
    "options": [
      "Ferramenta central para projetar e automatizar jornadas de cliente 1:1 em múltiplos canais e pontos de contato. Permite criar fluxos baseados em gatilhos e comportamentos do cliente.",
      "Mensagens completas construídas a partir de templates e/ou blocos de conteúdo.",
      "Garantir que as funções dos usuários tenham as permissões corretas para usar as diferentes atividades do Journey Builder.",
      "Obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais."
    ],
    "answer": "Obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais."
  },
  {
    "question": "O que é * Conversion Rate (Taxa de Conversão)?",
    "options": [
      "Conta quantas linhas foram retornadas pela busca.",
      "Utilize o ARC para visualizar e navegar por redes de relacionamento complexas, identificar oportunidades e tomar ações diretamente do gráfico.",
      "_spf.salesforce.com include:_spf.multitech.com ~all",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics)."
    ],
    "answer": "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics)."
  },
  {
    "question": "O que é * Einstein for Service Cloud?",
    "options": [
      "Segment_Leads_EmpresaB",
      "Utilize a IA para recursos como Einstein Bots (chatbots para autoatendimento), Einstein Case Classification (classificação automática de casos) e Einstein Article Recommendations (recomendações de artigos para agentes).",
      "Traga dados do Sales/Service Cloud (Contatos, Leads, Contas, Objetos Personalizados) para o Marketing Cloud para segmentação.",
      "Read"
    ],
    "answer": "Utilize a IA para recursos como Einstein Bots (chatbots para autoatendimento), Einstein Case Classification (classificação automática de casos) e Einstein Article Recommendations (recomendações de artigos para agentes)."
  },
  {
    "question": "O que é * Gerenciamento de Referências (Referral Management)?",
    "options": [
      "Conector nativo e bidirecional entre Marketing Cloud e Sales Cloud/Service Cloud.",
      "Rastreie e gerencie referências de negócios dentro e fora da instituição, garantindo que as oportunidades sejam encaminhadas e acompanhadas de forma eficiente.",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics).",
      "Dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas."
    ],
    "answer": "Rastreie e gerencie referências de negócios dentro e fora da instituição, garantindo que as oportunidades sejam encaminhadas e acompanhadas de forma eficiente."
  },
  {
    "question": "O que é Etapa 4?",
    "options": [
      "Segmentação - Novos Clientes",
      "EmailAddress, Length: 254)",
      "Configurar notificações por email para administradores quando uma automação falha.",
      "O cliente (e seu administrador) é responsável por configurar e usar a plataforma de forma segura (controle de acesso, segurança de dados, conformidade)."
    ],
    "answer": "Segmentação - Novos Clientes"
  },
  {
    "question": "O que é * Facilite o Opt-out?",
    "options": [
      "Processar e gerenciar emails que retornam (hard bounces, soft bounces) para manter a lista saudável.",
      "Adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho.",
      "Torne o processo de cancelamento simples e rápido.",
      "Configurar sons personalizados para notificações."
    ],
    "answer": "Torne o processo de cancelamento simples e rápido."
  },
  {
    "question": "O que é * Delivery Rate (Taxa de Entrega)?",
    "options": [
      "Aprofunde-se nos recursos de IA, como:",
      "Entenda como o FSC se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente.",
      "Utilize a IA para recursos como Einstein Bots (chatbots para autoatendimento), Einstein Case Classification (classificação automática de casos) e Einstein Article Recommendations (recomendações de artigos para agentes).",
      "(Entregues / Enviados) * 100. Indica a saúde da lista e a reputação do remetente."
    ],
    "answer": "(Entregues / Enviados) * 100. Indica a saúde da lista e a reputação do remetente."
  },
  {
    "question": "O que é 2. Equipe de Dados?",
    "options": [
      "Gerencia importações/exportações e segmentação, mas não cria conteúdo",
      "Ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados.",
      "Fluxos de trabalho e automações pré-configurados para processos comuns do setor financeiro, como integração de novos clientes, solicitações de empréstimos e gerenciamento de sinistros.",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:"
    ],
    "answer": "Gerencia importações/exportações e segmentação, mas não cria conteúdo"
  },
  {
    "question": "O que é * Gerenciamento de Conformidade e Auditoria?",
    "options": [
      "Monitorar métricas de entregabilidade (bounces, spam complaints) e reputação de envio.",
      "Novo.",
      "Conta quantas linhas foram retornadas pela busca.",
      "Ajuda a garantir que as interações e processos estejam em conformidade com as regulamentações do setor, com registros detalhados e trilhas de auditoria."
    ],
    "answer": "Ajuda a garantir que as interações e processos estejam em conformidade com as regulamentações do setor, com registros detalhados e trilhas de auditoria."
  },
  {
    "question": "O que é * Criação?",
    "options": [
      "Novos usuários são criados na área de Setup, fornecendo informações básicas como nome, endereço de email (que serve como nome de usuário), fuso horário e configurações de localidade.",
      "\"parent_bu_mid_here\",",
      "\"LastModified\",",
      "Analise grandes volumes de dados financeiros para descobrir insights e padrões ocultos que podem informar estratégias de negócios."
    ],
    "answer": "Novos usuários são criados na área de Setup, fornecendo informações básicas como nome, endereço de email (que serve como nome de usuário), fuso horário e configurações de localidade."
  },
  {
    "question": "O que é v=spf1 include?",
    "options": [
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano.",
      "_spf.salesforce.com include:_spf.multitech.com ~all",
      "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas.",
      "Módulo focado em um canal (Email Studio, Mobile Studio, Social Studio, Advertising Studio)."
    ],
    "answer": "_spf.salesforce.com include:_spf.multitech.com ~all"
  },
  {
    "question": "O que é * DKIM (DomainKeys Identified Mail)?",
    "options": [
      "Segment_Leads_EmpresaB",
      "Conector nativo e bidirecional entre Marketing Cloud e Sales Cloud/Service Cloud.",
      "SubscriberKey (Text, Primary Key), EmailAddress (EmailAddress), FirstName (Text), LastName (Text), CompanyName (Text)",
      "Adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho."
    ],
    "answer": "Adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho."
  },
  {
    "question": "O que é * Utilizem Inteligência Artificial (IA)?",
    "options": [
      "Gerenciar pacotes de API, definindo escopos de permissão específicos para cada integração.",
      "HubSpot usado pela segunda empresa adquirida",
      "Acesso rápido a objetos e funcionalidades como Leads, Contas, Oportunidades, Tarefas, etc.",
      "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas."
    ],
    "answer": "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas."
  },
  {
    "question": "O que é * FirstName (Type?",
    "options": [
      "Criar automações para limpar regularmente dados antigos ou inválidos.",
      "Comma",
      "Automatize e otimize processos como abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e planejamento financeiro, com fluxos de trabalho e modelos de dados adaptados.",
      "Text, Length: 100, Nullable: Yes)"
    ],
    "answer": "Text, Length: 100, Nullable: Yes)"
  },
  {
    "question": "O que é <div style=\"margin?",
    "options": [
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis.",
      "EmailAddress, Length: 254)",
      "Encontre rapidamente qualquer registro na plataforma.",
      "30px 0; padding:15px; background-color:#f8f9fa; border-radius:5px; text-align:center;\">"
    ],
    "answer": "30px 0; padding:15px; background-color:#f8f9fa; border-radius:5px; text-align:center;\">"
  },
  {
    "question": "O que é * Gerenciamento de Conformidade e Auditoria?",
    "options": [
      "Segmentação - Novos Clientes",
      "Tipo de Conta: Conta Corrente, Nome da Conta: Conta Corrente Principal, Saldo: R$ 10.000,00).",
      "Read",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento."
    ],
    "answer": "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento."
  },
  {
    "question": "O que é * No relatório de Leads, adicione filtros para Pontuação do Lead do Einstein maior que [um valor, ex?",
    "options": [
      "70].",
      "\"Master contact record for all business units\",",
      "Interface principal para visualizar o desempenho de envios individuais, testes A/B e envios acionados.",
      "Jornada de Boas-Vindas Simples"
    ],
    "answer": "70]."
  },
  {
    "question": "O que é * Bounce Management (Gestão de Bounces)?",
    "options": [
      "Read",
      "Processar e gerenciar emails que retornam (hard bounces, soft bounces) para manter a lista saudável.",
      "\"Business Unit for Software Division marketing activities\",",
      "O produto X não está funcionando conforme o esperado.."
    ],
    "answer": "Processar e gerenciar emails que retornam (hard bounces, soft bounces) para manter a lista saudável."
  },
  {
    "question": "O que é * Salesforce Engage?",
    "options": [
      "Ferramentas para que os vendedores possam enviar e-mails personalizados e rastrear o engajamento dos leads.",
      "Utilizar as APIs REST e SOAP do Marketing Cloud para integrar dados de sistemas externos.",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados.",
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone)."
    ],
    "answer": "Ferramentas para que os vendedores possam enviar e-mails personalizados e rastrear o engajamento dos leads."
  },
  {
    "question": "O que é * Tomar Ações?",
    "options": [
      "Rastrear alterações de configuração que podem ter causado um problema.",
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano.",
      "Usar os insights dos relatórios para otimizar assuntos, conteúdo, CTAs, segmentação, frequência, horário de envio e estratégias gerais.",
      "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante."
    ],
    "answer": "Usar os insights dos relatórios para otimizar assuntos, conteúdo, CTAs, segmentação, frequência, horário de envio e estratégias gerais."
  },
  {
    "question": "O que é * Synchronized Data Extensions?",
    "options": [
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)",
      "uma \"Conta Corrente\" com saldo de R$ 30.000,00.",
      "Configuração das Jornadas/Campanhas",
      "Traga dados do Sales/Service Cloud (Contatos, Leads, Contas, Objetos Personalizados) para o Marketing Cloud para segmentação."
    ],
    "answer": "Traga dados do Sales/Service Cloud (Contatos, Leads, Contas, Objetos Personalizados) para o Marketing Cloud para segmentação."
  },
  {
    "question": "O que é * Automação de Manutenção?",
    "options": [
      "\"Ofertas Exclusivas para Membros Gold!\"",
      "Configuração das Jornadas/Campanhas",
      "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud.",
      "Criar automações para limpar regularmente dados antigos ou inválidos."
    ],
    "answer": "Criar automações para limpar regularmente dados antigos ou inválidos."
  },
  {
    "question": "O que é * Causas?",
    "options": [
      "Aprofunde-se nos recursos de IA, como:",
      "\"Synchronized Accounts from Sales Cloud\",",
      "Segmentação - Novos Clientes",
      "Configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no Sales Cloud)."
    ],
    "answer": "Configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no Sales Cloud)."
  },
  {
    "question": "O que é * Integração com o Slack?",
    "options": [
      "Permite que as equipes de vendas colaborem em tempo real, compartilhem atualizações e fechem negócios mais rapidamente.",
      "Adiciona uma assinatura digital criptografada ao cabeçalho do email, permitindo que o servidor receptor verifique se o email realmente veio do domínio declarado e não foi alterado no caminho.",
      "420%",
      "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas."
    ],
    "answer": "Permite que as equipes de vendas colaborem em tempo real, compartilhem atualizações e fechem negócios mais rapidamente."
  },
  {
    "question": "O que é * Gerenciamento de Referências?",
    "options": [
      "4 dias",
      "Limitar o acesso à conta a partir de faixas de IP confiáveis.",
      "Ferramentas para rastrear e gerenciar referências internas e externas, garantindo que as oportunidades de negócios sejam encaminhadas e acompanhadas adequadamente.",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados."
    ],
    "answer": "Ferramentas para rastrear e gerenciar referências internas e externas, garantindo que as oportunidades de negócios sejam encaminhadas e acompanhadas adequadamente."
  },
  {
    "question": "O que é * Ferramentas de Monitoramento?",
    "options": [
      "Sentimos sua falta",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B).",
      "Gerencia importações/exportações e segmentação, mas não cria conteúdo",
      "Usar o Tracking do Email Studio, relatórios do Marketing Cloud, Google Postmaster Tools, Microsoft SNDS e ferramentas de terceiros para acompanhar métricas de entregabilidade e reputação."
    ],
    "answer": "Usar o Tracking do Email Studio, relatórios do Marketing Cloud, Google Postmaster Tools, Microsoft SNDS e ferramentas de terceiros para acompanhar métricas de entregabilidade e reputação."
  },
  {
    "question": "O que é * Otimização de Processos Específicos do Setor?",
    "options": [
      "Utilize o FSC para suportar processos de planejamento financeiro mais complexos, incluindo análise de risco, modelagem de cenários e recomendações de portfólio.",
      "Automatize e otimize processos como abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e planejamento financeiro, com fluxos de trabalho e modelos de dados adaptados.",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento.",
      "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo."
    ],
    "answer": "Automatize e otimize processos como abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e planejamento financeiro, com fluxos de trabalho e modelos de dados adaptados."
  },
  {
    "question": "O que é * Data Extension?",
    "options": [
      "Adiciona contatos quando são adicionados ou atualizados em uma DE.",
      "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs.",
      "line-through;\">R$ %%=FormatNumber(@productPrice, \"N2\", \"pt-BR\")=%%</span><br>",
      "Fluxos de trabalho e automações pré-configurados para processos comuns do setor financeiro, como integração de novos clientes, solicitações de empréstimos e gerenciamento de sinistros."
    ],
    "answer": "Adiciona contatos quando são adicionados ou atualizados em uma DE."
  },
  {
    "question": "O que é Empresa?",
    "options": [
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:",
      "Text, Length: 100, Nullable: Yes)",
      "Configurar opções de compartilhamento de conteúdo entre BUs.",
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)"
    ],
    "answer": "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)"
  },
  {
    "question": "O que é 1. Equipe de Conteúdo?",
    "options": [
      "Implementar jornadas de cliente baseadas em comportamento",
      "Ferramenta central para projetar e automatizar jornadas de cliente 1:1 em múltiplos canais e pontos de contato. Permite criar fluxos baseados em gatilhos e comportamentos do cliente.",
      "Cria emails e landing pages, mas não deve enviar emails ou acessar dados sensíveis",
      "O Marketing Cloud auxilia na configuração desses protocolos através do Sender Authentication Package (SAP) ou gerenciamento de Private Domains."
    ],
    "answer": "Cria emails e landing pages, mas não deve enviar emails ou acessar dados sensíveis"
  },
  {
    "question": "O que é * AMPscript para Conteúdo Dinâmico?",
    "options": [
      "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões).",
      "Conta quantas linhas foram retornadas pela busca.",
      "Use LookupRows() e loops FOR para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos).",
      "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs."
    ],
    "answer": "Use LookupRows() e loops FOR para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos)."
  },
  {
    "question": "O que é * Função?",
    "options": [
      "Utilizar conectores pré-construídos para integrar com plataformas populares.",
      "Novos usuários são criados na área de Setup, fornecendo informações básicas como nome, endereço de email (que serve como nome de usuário), fuso horário e configurações de localidade.",
      "Create, Read, Update, Delete",
      "\"Regional Marketing\" (uma para cada região)"
    ],
    "answer": "\"Regional Marketing\" (uma para cada região)"
  },
  {
    "question": "O que é * Automação de Processos de Negócios?",
    "options": [
      "Fluxos de trabalho e automações pré-configurados para processos comuns do setor financeiro, como integração de novos clientes, solicitações de empréstimos e gerenciamento de sinistros.",
      "Dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas.",
      "Acesso rápido a objetos como Casos, Contas, Contatos, Artigos, etc.",
      "Configurar conexões com outras nuvens Salesforce (Marketing Cloud Connect), APIs e sistemas externos."
    ],
    "answer": "Fluxos de trabalho e automações pré-configurados para processos comuns do setor financeiro, como integração de novos clientes, solicitações de empréstimos e gerenciamento de sinistros."
  },
  {
    "question": "O que é * Journey Builder?",
    "options": [
      "Agende o envio para a data/hora desejada ou envie imediatamente.",
      "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões).",
      "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo.",
      "Dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas."
    ],
    "answer": "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões)."
  },
  {
    "question": "O que é * EmailAddress (Type?",
    "options": [
      "Usar os insights dos relatórios para otimizar assuntos, conteúdo, CTAs, segmentação, frequência, horário de envio e estratégias gerais.",
      "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo.",
      "EmailAddress, Length: 254)",
      "Uma abordagem onde dados sensíveis são substituídos por tokens antes de serem enviados para o Marketing Cloud. Os dados reais permanecem no sistema de origem seguro. O Marketing Cloud usa os tokens para personalização e, no momento do envio, pode (em alguns cenários) buscar os dados reais via API ou o sistema receptor pode reidratar os dados."
    ],
    "answer": "EmailAddress, Length: 254)"
  },
  {
    "question": "O que é * Integrações?",
    "options": [
      "Utilize o ARC para visualizar e navegar por redes de relacionamento complexas, identificar oportunidades e tomar ações diretamente do gráfico.",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:",
      "Configurar conexões com outras nuvens Salesforce (Marketing Cloud Connect), APIs e sistemas externos.",
      "Número de vezes que o email foi aberto (rastreado por um pixel invisível)."
    ],
    "answer": "Configurar conexões com outras nuvens Salesforce (Marketing Cloud Connect), APIs e sistemas externos."
  },
  {
    "question": "O que é * Modelo de Responsabilidade Compartilhada?",
    "options": [
      "O cliente (e seu administrador) é responsável por configurar e usar a plataforma de forma segura (controle de acesso, segurança de dados, conformidade).",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B).",
      "Utilize o ARC para visualizar e navegar por redes de relacionamento complexas, identificar oportunidades e tomar ações diretamente do gráfico.",
      "Esta automação segue um fluxo lógico de importação, processamento e segmentação de dados. Primeiro, importa os arquivos do SFTP para o Marketing Cloud. Em seguida, processa os dados de clientes e transações, atualizando as DEs principais. Depois, executa consultas SQL para segmentar os clientes em três grupos distintos para diferentes campanhas. A automação é agendada para rodar diariamente após a chegada esperada dos arquivos. As jornadas e campanhas subsequentes são configuradas para usar as DEs de segmentação como fontes de entrada."
    ],
    "answer": "O cliente (e seu administrador) é responsável por configurar e usar a plataforma de forma segura (controle de acesso, segurança de dados, conformidade)."
  },
  {
    "question": "O que é * Oportunidade (Opportunity)?",
    "options": [
      "Um negócio potencial que você está tentando fechar. Oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas.",
      "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades.",
      "Configurar a captura de leads de anúncios do Facebook ou Google diretamente para Data Extensions ou Sales Cloud.",
      "Encontre rapidamente qualquer registro na plataforma."
    ],
    "answer": "Um negócio potencial que você está tentando fechar. Oportunidades representam o valor monetário e o estágio de um negócio em seu pipeline de vendas."
  },
  {
    "question": "O que é \"description\"?",
    "options": [
      "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante.",
      "Configuração e Integração (Semanas 5-8)",
      "\"Synchronized Accounts from Sales Cloud\",",
      "Ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados."
    ],
    "answer": "\"Synchronized Accounts from Sales Cloud\","
  },
  {
    "question": "O que é * Einstein for Service Cloud?",
    "options": [
      "Equipe global de análise de marketing",
      "Aprofunde-se nos recursos de IA, como:",
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará.",
      "Sentimos sua falta"
    ],
    "answer": "Aprofunde-se nos recursos de IA, como:"
  },
  {
    "question": "O que é * Propósito?",
    "options": [
      "Salesforce Marketing Cloud Engagement (Aprofundado)",
      "Enviar emails individuais em resposta a uma ação específica do cliente, geralmente em tempo real, via API.",
      "Conta quantas linhas foram retornadas pela busca.",
      "O produto X não está funcionando conforme o esperado.."
    ],
    "answer": "Enviar emails individuais em resposta a uma ação específica do cliente, geralmente em tempo real, via API."
  },
  {
    "question": "O que é * API e Desenvolvimento (Apex, Visualforce, Lightning Web Components)?",
    "options": [
      "Compreenda como estender a funcionalidade do Sales Cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas.",
      "Configuração de domínios de envio dedicados, IPs dedicados (opcional), autenticação DKIM/SPF, e wrapping de links/imagens para melhorar a entregabilidade e o branding.",
      "Configurar opções de compartilhamento de conteúdo entre BUs.",
      "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs."
    ],
    "answer": "Compreenda como estender a funcionalidade do Sales Cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas."
  },
  {
    "question": "O que é \"description\"?",
    "options": [
      "\"Business Unit for Software Division marketing activities\",",
      "Comma",
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará.",
      "Adiciona contatos quando são adicionados ou atualizados em uma DE."
    ],
    "answer": "\"Business Unit for Software Division marketing activities\","
  },
  {
    "question": "O que é * GroupConnect (LINE - específico para Ásia)?",
    "options": [
      "Encontre rapidamente qualquer registro na plataforma.",
      "Novo.",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento.",
      "Configurar integração com contas do LINE."
    ],
    "answer": "Configurar integração com contas do LINE."
  },
  {
    "question": "O que é 1. Segmentação inadequada?",
    "options": [
      "50000.",
      "line-through;\">R$ %%=FormatNumber(@productPrice, \"N2\", \"pt-BR\")=%%</span><br>",
      "\"Business Unit for Software Division marketing activities\",",
      "A empresa estava enviando o mesmo email para toda a base, sem considerar o histórico de compras, interesses ou nível de engajamento."
    ],
    "answer": "A empresa estava enviando o mesmo email para toda a base, sem considerar o histórico de compras, interesses ou nível de engajamento."
  },
  {
    "question": "O que é * Einstein Content Selection?",
    "options": [
      "Equipe global de análise de marketing",
      "Estágio da Oportunidade = 'Fechado Ganho').",
      "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud.",
      "Deixe o Einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento."
    ],
    "answer": "Deixe o Einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento."
  },
  {
    "question": "O que é Tarefa?",
    "options": [
      "Permite criptografar campos específicos dentro de Data Extensions que contenham dados sensíveis (PII - Personally Identifiable Information). Requer configuração e gerenciamento de chaves. Os dados criptografados não podem ser usados diretamente em segmentações ou personalização sem descriptografia (geralmente via script).",
      "\"Contact_Master\",",
      "Utilizar as APIs REST e SOAP do Marketing Cloud para integrar dados de sistemas externos.",
      "Quais são as possíveis causas para essa alta taxa de Hard Bounce e quais ações um Email Specialist deve tomar para investigar e mitigar o problema?"
    ],
    "answer": "Quais são as possíveis causas para essa alta taxa de Hard Bounce e quais ações um Email Specialist deve tomar para investigar e mitigar o problema?"
  },
  {
    "question": "O que é \"description\"?",
    "options": [
      "Documentação oficial sobre cada Studio e Builder.",
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas.",
      "Módulo focado em um canal (Email Studio, Mobile Studio, Social Studio, Advertising Studio).",
      "\"Master contact record for all business units\","
    ],
    "answer": "\"Master contact record for all business units\","
  },
  {
    "question": "O que é * Restrições de Login por IP?",
    "options": [
      "APIs e conectores para integrar o FSC com sistemas bancários, de investimento e de seguros existentes, permitindo a troca de dados em tempo real.",
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis.",
      "Dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas.",
      "Limitar o acesso à conta a partir de faixas de IP confiáveis."
    ],
    "answer": "Limitar o acesso à plataforma apenas a partir de redes confiáveis."
  },
  {
    "question": "O que é * Contato (Contact)?",
    "options": [
      "Uma pessoa associada a uma Conta. Contatos são os indivíduos com quem os vendedores interagem dentro de uma empresa.",
      "Novo contato adicionado ao CRM",
      "Utilize a IA para recursos como Einstein Bots (chatbots para autoatendimento), Einstein Case Classification (classificação automática de casos) e Einstein Article Recommendations (recomendações de artigos para agentes).",
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas."
    ],
    "answer": "Uma pessoa associada a uma Conta. Contatos são os indivíduos com quem os vendedores interagem dentro de uma empresa."
  },
  {
    "question": "O que é * Tracking & Analytics?",
    "options": [
      "Enviar emails individuais em resposta a uma ação específica do cliente, geralmente em tempo real, via API.",
      "Processar e gerenciar emails que retornam (hard bounces, soft bounces) para manter a lista saudável.",
      "Read",
      "Ajuda a garantir que as interações e processos estejam em conformidade com as regulamentações do setor, com registros detalhados e trilhas de auditoria."
    ],
    "answer": "Read"
  },
  {
    "question": "O que é * Gestão de Contas e Contatos?",
    "options": [
      "Configuração de domínios de envio dedicados, IPs dedicados (opcional), autenticação DKIM/SPF, e wrapping de links/imagens para melhorar a entregabilidade e o branding.",
      "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades.",
      "50000.",
      "Limitar o acesso à conta a partir de faixas de IP confiáveis."
    ],
    "answer": "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades."
  },
  {
    "question": "O que é * Allow/Deny (Permitir/Negar)?",
    "options": [
      "Ferramentas para que os vendedores possam enviar e-mails personalizados e rastrear o engajamento dos leads.",
      "As permissões são geralmente definidas como \"Allow\" (Permitir). Algumas permissões podem ter uma opção explícita de \"Deny\" (Negar), que sobrepõe qualquer \"Allow\" para essa permissão específica.",
      "\"LastModified\",",
      "Configurar conexões com outras nuvens Salesforce (Marketing Cloud Connect), APIs e sistemas externos."
    ],
    "answer": "As permissões são geralmente definidas como \"Allow\" (Permitir). Algumas permissões podem ter uma opção explícita de \"Deny\" (Negar), que sobrepõe qualquer \"Allow\" para essa permissão específica."
  },
  {
    "question": "O que é \"type\"?",
    "options": [
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados.",
      "Documentação oficial sobre cada Studio e Builder.",
      "\"Boolean\",",
      "(Entregues / Enviados) * 100. Indica a saúde da lista e a reputação do remetente."
    ],
    "answer": "\"Boolean\","
  },
  {
    "question": "O que é Fase 5?",
    "options": [
      "Automações e Jornadas (Semanas 17-20)",
      "Data Extensions que sincronizam automaticamente dados do Sales Cloud ou Service Cloud.",
      "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar.",
      "Criar automações para limpar regularmente dados antigos ou inválidos."
    ],
    "answer": "Automações e Jornadas (Semanas 17-20)"
  },
  {
    "question": "O que é Explicação?",
    "options": [
      "Configurar opções de compartilhamento de conteúdo entre BUs.",
      "Uma pessoa associada a uma Conta. Contatos são os indivíduos com quem os vendedores interagem dentro de uma empresa.",
      "Esta automação segue um fluxo lógico de importação, processamento e segmentação de dados. Primeiro, importa os arquivos do SFTP para o Marketing Cloud. Em seguida, processa os dados de clientes e transações, atualizando as DEs principais. Depois, executa consultas SQL para segmentar os clientes em três grupos distintos para diferentes campanhas. A automação é agendada para rodar diariamente após a chegada esperada dos arquivos. As jornadas e campanhas subsequentes são configuradas para usar as DEs de segmentação como fontes de entrada.",
      "Import File"
    ],
    "answer": "Esta automação segue um fluxo lógico de importação, processamento e segmentação de dados. Primeiro, importa os arquivos do SFTP para o Marketing Cloud. Em seguida, processa os dados de clientes e transações, atualizando as DEs principais. Depois, executa consultas SQL para segmentar os clientes em três grupos distintos para diferentes campanhas. A automação é agendada para rodar diariamente após a chegada esperada dos arquivos. As jornadas e campanhas subsequentes são configuradas para usar as DEs de segmentação como fontes de entrada."
  },
  {
    "question": "O que é * Name?",
    "options": [
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano.",
      "Verificar se as restrições de IP também se aplicam a usuários de API e, se necessário, adicionar os IPs dos servidores que farão as chamadas de API à lista.",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados.",
      "Segment_Leads_EmpresaB"
    ],
    "answer": "Segment_Leads_EmpresaB"
  },
  {
    "question": "O que é * ROI da campanha de reengajamento?",
    "options": [
      "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar.",
      "Usar as APIs REST/SOAP do Marketing Cloud para enviar dados do e-commerce em tempo real ou em lote.",
      "O cliente (e seu administrador) é responsável por configurar e usar a plataforma de forma segura (controle de acesso, segurança de dados, conformidade).",
      "420%"
    ],
    "answer": "420%"
  },
  {
    "question": "O que é * Einstein Discovery?",
    "options": [
      "Analise grandes volumes de dados financeiros para descobrir insights e padrões ocultos que podem informar estratégias de negócios.",
      "Envie conteúdo relevante para aumentar o engajamento.",
      "Criem segmentos de público altamente específicos com base em dados demográficos, comportamentais e de engajamento.",
      "Encontre rapidamente qualquer registro na plataforma."
    ],
    "answer": "Analise grandes volumes de dados financeiros para descobrir insights e padrões ocultos que podem informar estratégias de negócios."
  },
  {
    "question": "O que é * Atividade 6?",
    "options": [
      "Novos usuários são criados na área de Setup, fornecendo informações básicas como nome, endereço de email (que serve como nome de usuário), fuso horário e configurações de localidade.",
      "EmailAddress, Length: 254)",
      "\"Business Unit for Software Division marketing activities\",",
      "SQL Query"
    ],
    "answer": "SQL Query"
  },
  {
    "question": "O que é * Entregabilidade?",
    "options": [
      "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo.",
      "Monitorar métricas de entregabilidade (bounces, spam complaints) e reputação de envio.",
      "Utilize o FSC para criar experiências digitais personalizadas para clientes financeiros, incluindo portais de autoatendimento, aplicativos móveis e comunicações proativas.",
      "Enviar emails individuais em resposta a uma ação específica do cliente, geralmente em tempo real, via API."
    ],
    "answer": "Monitorar métricas de entregabilidade (bounces, spam complaints) e reputação de envio."
  },
  {
    "question": "O que é * Email 1?",
    "options": [
      "Enviado imediatamente após a inscrição, agradecendo e oferecendo um cupom de 10% de desconto.",
      "Embora mais comum para Soft Bounces, bloqueios severos ou problemas de reputação podem, em alguns casos, ser reportados como Hard Bounces por certos ISPs.",
      "_spf.salesforce.com include:_spf.multitech.com ~all",
      "Escreva o bloco de código AMPscript para exibir o cabeçalho dinâmico dentro de um Bloco de Conteúdo HTML no Content Builder."
    ],
    "answer": "Enviado imediatamente após a inscrição, agradecendo e oferecendo um cupom de 10% de desconto."
  },
  {
    "question": "O que é * Email 2?",
    "options": [
      "A implementação de dashboards de monitoramento permitiu identificar problemas rapidamente e fazer ajustes.",
      "Recursos e casos de uso (Dia 2)",
      "Número de destinatários únicos que abriram o email.",
      "Utilize a IA para recursos como Einstein Bots (chatbots para autoatendimento), Einstein Case Classification (classificação automática de casos) e Einstein Article Recommendations (recomendações de artigos para agentes)."
    ],
    "answer": "Recursos e casos de uso (Dia 2)"
  },
  {
    "question": "O que é 4. SET @RowCount = RowCount(@ProductRows)?",
    "options": [
      "O Marketing Cloud auxilia na configuração desses protocolos através do Sender Authentication Package (SAP) ou gerenciamento de Private Domains.",
      "Entidade central que representa um indivíduo que pode receber comunicações. Cada assinante tem um registro na All Subscribers List (lista de todos os assinantes).",
      "Deixe o Einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento.",
      "Conta quantas linhas foram retornadas pela busca."
    ],
    "answer": "Conta quantas linhas foram retornadas pela busca."
  },
  {
    "question": "O que é * Einstein Bots?",
    "options": [
      "SQL Query",
      "A Plataforma de Aprendizado da Salesforce",
      "\"Master contact record for all business units\",",
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano."
    ],
    "answer": "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano."
  },
  {
    "question": "O que é 7. Data Retention Policy?",
    "options": [
      "(Deixe como Off por enquanto, ou configure se necessário).",
      "Use LookupRows() e loops FOR para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos).",
      "Rastreie e gerencie referências de negócios dentro e fora da instituição, garantindo que as oportunidades sejam encaminhadas e acompanhadas de forma eficiente.",
      "Utilize o FSC para suportar processos de planejamento financeiro mais complexos, incluindo análise de risco, modelagem de cenários e recomendações de portfólio."
    ],
    "answer": "(Deixe como Off por enquanto, ou configure se necessário)."
  },
  {
    "question": "O que é Cenário?",
    "options": [
      "Sugira respostas prontas para agentes com base no histórico de conversas e no contexto do caso.",
      "Salesforce Marketing Cloud Engagement (Aprofundado)",
      "Um novo cliente se inscreve na newsletter da TechGadgets através de um formulário no site. A empresa quer enviar uma série de 2 emails de boas-vindas.",
      "A Plataforma de Aprendizado da Salesforce"
    ],
    "answer": "Um novo cliente se inscreve na newsletter da TechGadgets através de um formulário no site. A empresa quer enviar uma série de 2 emails de boas-vindas."
  },
  {
    "question": "O que é * Segmentem Audiências?",
    "options": [
      "Configurar a captura de leads de anúncios do Facebook ou Google diretamente para Data Extensions ou Sales Cloud.",
      "Criem segmentos de público altamente específicos com base em dados demográficos, comportamentais e de engajamento.",
      "Conta quantas linhas foram retornadas pela busca.",
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará."
    ],
    "answer": "Criem segmentos de público altamente específicos com base em dados demográficos, comportamentais e de engajamento."
  },
  {
    "question": "O que é * Delimiter?",
    "options": [
      "Comma",
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará.",
      "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo.",
      "Use LookupRows() e loops FOR para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos)."
    ],
    "answer": "Comma"
  },
  {
    "question": "O que é Properties?",
    "options": [
      "Selecione \"Subject Line\" (Linha de Assunto).",
      "[",
      "Encontre rapidamente qualquer registro na plataforma.",
      "Fornecer uma base de dados rica e insights acionáveis que permitem às empresas inovar em produtos, serviços e estratégias de engajamento."
    ],
    "answer": "["
  },
  {
    "question": "O que é * Preencha Descrição?",
    "options": [
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará.",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:",
      "O produto X não está funcionando conforme o esperado..",
      "\"LastModified\","
    ],
    "answer": "O produto X não está funcionando conforme o esperado.."
  },
  {
    "question": "O que é * Atividade 2?",
    "options": [
      "Novo contato adicionado ao CRM",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados.",
      "File Transfer",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics)."
    ],
    "answer": "File Transfer"
  },
  {
    "question": "O que é Explicação?",
    "options": [
      "Traga dados do Sales/Service Cloud (Contatos, Leads, Contas, Objetos Personalizados) para o Marketing Cloud para segmentação.",
      "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs.",
      "Permite criptografar campos específicos dentro de Data Extensions que contenham dados sensíveis (PII - Personally Identifiable Information). Requer configuração e gerenciamento de chaves. Os dados criptografados não podem ser usados diretamente em segmentações ou personalização sem descriptografia (geralmente via script).",
      "Uma alta taxa de Hard Bounce, especialmente em listas antigas, indica problemas com a qualidade e validade dos endereços. A ação principal é focar na higiene da lista, removendo endereços inválidos e inativos, e revisando os processos de coleta para evitar a entrada de emails ruins. O monitoramento contínuo e estratégias de reengajamento cuidadosas são essenciais para manter a saúde da lista e a entregabilidade."
    ],
    "answer": "Uma alta taxa de Hard Bounce, especialmente em listas antigas, indica problemas com a qualidade e validade dos endereços. A ação principal é focar na higiene da lista, removendo endereços inválidos e inativos, e revisando os processos de coleta para evitar a entrada de emails ruins. O monitoramento contínuo e estratégias de reengajamento cuidadosas são essenciais para manter a saúde da lista e a entregabilidade."
  },
  {
    "question": "O que é * Dashboards?",
    "options": [
      "false",
      "Entenda como o FSC se integra com sistemas legados para sincronizar dados de contas, transações e apólices, criando uma visão unificada do cliente.",
      "Create, Read, Update, Delete",
      "Acesso rápido a objetos como Casos, Contas, Contatos, Artigos, etc."
    ],
    "answer": "Create, Read, Update, Delete"
  },
  {
    "question": "O que é Fase 2?",
    "options": [
      "APIs e conectores para integrar o FSC com sistemas bancários, de investimento e de seguros existentes, permitindo a troca de dados em tempo real.",
      "Usar as APIs REST/SOAP do Marketing Cloud para enviar dados do e-commerce em tempo real ou em lote.",
      "Configurar notificações por email para administradores quando uma automação falha.",
      "Configuração e Integração (Semanas 5-8)"
    ],
    "answer": "Configuração e Integração (Semanas 5-8)"
  },
  {
    "question": "O que é * Email Studio Tracking?",
    "options": [
      "A implementação de dashboards de monitoramento permitiu identificar problemas rapidamente e fazer ajustes.",
      "Interface principal para visualizar o desempenho de envios individuais, testes A/B e envios acionados.",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:",
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis."
    ],
    "answer": "Interface principal para visualizar o desempenho de envios individuais, testes A/B e envios acionados."
  },
  {
    "question": "O que é Objetivo?",
    "options": [
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas.",
      "Ferramentas para rastrear e gerenciar referências internas e externas, garantindo que as oportunidades de negócios sejam encaminhadas e acompanhadas adequadamente.",
      "Dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas.",
      "Analise grandes volumes de dados financeiros para descobrir insights e padrões ocultos que podem informar estratégias de negócios."
    ],
    "answer": "Dominar a personalização avançada, a integração com outras plataformas, a análise de dados complexos e a aplicação de inteligência artificial para impulsionar a excelência no serviço ao cliente e a tomada de decisões estratégicas."
  },
  {
    "question": "O que é * Personalização da Experiência do Cliente (Digital Engagement)?",
    "options": [
      "Estágio da Oportunidade = 'Fechado Ganho').",
      "A equipe de marketing da TechGadgets quer testar duas linhas de assunto para um email promocional de um novo smartwatch para determinar qual gera a maior taxa de abertura única (Unique Open Rate).",
      "Utilize o FSC para criar experiências digitais personalizadas para clientes financeiros, incluindo portais de autoatendimento, aplicativos móveis e comunicações proativas.",
      "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões)."
    ],
    "answer": "Utilize o FSC para criar experiências digitais personalizadas para clientes financeiros, incluindo portais de autoatendimento, aplicativos móveis e comunicações proativas."
  },
  {
    "question": "O que é Resultados Esperados?",
    "options": [
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone).",
      "Quais são as possíveis causas para essa alta taxa de Hard Bounce e quais ações um Email Specialist deve tomar para investigar e mitigar o problema?",
      "O Einstein Bot pode lidar com um grande volume de perguntas comuns dos clientes, liberando os agentes humanos para se concentrarem em problemas mais complexos. Isso melhora a satisfação do cliente ao fornecer respostas instantâneas e reduz os custos operacionais do suporte.",
      "A empresa estava enviando o mesmo email para toda a base, sem considerar o histórico de compras, interesses ou nível de engajamento."
    ],
    "answer": "O Einstein Bot pode lidar com um grande volume de perguntas comuns dos clientes, liberando os agentes humanos para se concentrarem em problemas mais complexos. Isso melhora a satisfação do cliente ao fornecer respostas instantâneas e reduz os custos operacionais do suporte."
  },
  {
    "question": "O que é * Data Masking (Mascaramento de Dados)?",
    "options": [
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis.",
      "Ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados.",
      "Use LookupRows() e loops FOR para exibir múltiplos itens (ex: produtos no carrinho abandonado, últimos artigos lidos).",
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano."
    ],
    "answer": "Ocultar partes de dados sensíveis em logs ou na interface do usuário para usuários não autorizados."
  },
  {
    "question": "O que é <a href=\"%%=RedirectTo(Concat(@productURL, '?utm_source=email&utm_medium=reengagement&utm_campaign=winback'))=%%\" style=\"background-color?",
    "options": [
      "Obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais.",
      "Adiciona contatos via chamada de API externa (ex: após uma compra no site).",
      "Um novo cliente se inscreve na newsletter da TechGadgets através de um formulário no site. A empresa quer enviar uma série de 2 emails de boas-vindas.",
      "#4CAF50; color:white; padding:8px 15px; text-decoration:none; border-radius:3px;\">Ver Produto</a>"
    ],
    "answer": "#4CAF50; color:white; padding:8px 15px; text-decoration:none; border-radius:3px;\">Ver Produto</a>"
  },
  {
    "question": "O que é * Templates Prontos?",
    "options": [
      "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar.",
      "Uma alta taxa de Hard Bounce, especialmente em listas antigas, indica problemas com a qualidade e validade dos endereços. A ação principal é focar na higiene da lista, removendo endereços inválidos e inativos, e revisando os processos de coleta para evitar a entrada de emails ruins. O monitoramento contínuo e estratégias de reengajamento cuidadosas são essenciais para manter a saúde da lista e a entregabilidade.",
      "Esta automação segue um fluxo lógico de importação, processamento e segmentação de dados. Primeiro, importa os arquivos do SFTP para o Marketing Cloud. Em seguida, processa os dados de clientes e transações, atualizando as DEs principais. Depois, executa consultas SQL para segmentar os clientes em três grupos distintos para diferentes campanhas. A automação é agendada para rodar diariamente após a chegada esperada dos arquivos. As jornadas e campanhas subsequentes são configuradas para usar as DEs de segmentação como fontes de entrada.",
      "A empresa de e-commerce \"ShopSmart\" precisa automatizar o processo diário de importação de dados de clientes e transações do seu sistema ERP para o Marketing Cloud, seguido por segmentação para campanhas. Os dados chegam diariamente às 3h da manhã em um servidor SFTP como arquivos CSV separados:"
    ],
    "answer": "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar."
  },
  {
    "question": "O que é Cenário?",
    "options": [
      "Migração de Dados (Semanas 9-12)",
      "Tabelas para armazenar dados. Pense nelas como planilhas ou tabelas de banco de dados. São a base para segmentação e personalização.",
      "EmailAddress, Length: 254)",
      "A equipe de marketing da TechGadgets quer testar duas linhas de assunto para um email promocional de um novo smartwatch para determinar qual gera a maior taxa de abertura única (Unique Open Rate)."
    ],
    "answer": "A equipe de marketing da TechGadgets quer testar duas linhas de assunto para um email promocional de um novo smartwatch para determinar qual gera a maior taxa de abertura única (Unique Open Rate)."
  },
  {
    "question": "O que é Nível Especialista?",
    "options": [
      "Jornada de Boas-Vindas Simples",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B).",
      "Otimização e Estratégia no Service Cloud",
      "50000."
    ],
    "answer": "Otimização e Estratégia no Service Cloud"
  },
  {
    "question": "O que é * SQL Query?",
    "options": [
      "Crie o email promocional no Content Builder. O conteúdo será o mesmo para ambas as versões do teste, apenas o assunto mudará.",
      "Executa consultas SQL para segmentar dados.",
      "420%",
      "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante."
    ],
    "answer": "Executa consultas SQL para segmentar dados."
  },
  {
    "question": "O que é * Emails?",
    "options": [
      "Monitore o desempenho do atendimento ao cliente com relatórios e dashboards personalizáveis, analisando métricas como tempo médio de resolução, satisfação do cliente e volume de casos.",
      "Arraste outra atividade \"Email\" após a atividade Wait. Selecione o Email 2 criado no Content Builder. Configure as opções de envio.",
      "Utilize o FSC para suportar processos de planejamento financeiro mais complexos, incluindo análise de risco, modelagem de cenários e recomendações de portfólio.",
      "Mensagens completas construídas a partir de templates e/ou blocos de conteúdo."
    ],
    "answer": "Mensagens completas construídas a partir de templates e/ou blocos de conteúdo."
  },
  {
    "question": "O que é * Einstein Reply Recommendations?",
    "options": [
      "Criar automações para limpar regularmente dados antigos ou inválidos.",
      "Habilitar ou desabilitar funcionalidades específicas do Marketing Cloud para a conta ou BUs.",
      "Sugira respostas prontas para agentes com base no histórico de conversas e no contexto do caso.",
      "ISPs monitoram se os destinatários abrem, clicam, marcam como importantes ou movem emails para a caixa de entrada. Alto engajamento sinaliza que os emails são desejados."
    ],
    "answer": "Sugira respostas prontas para agentes com base no histórico de conversas e no contexto do caso."
  },
  {
    "question": "O que é \"parentId\"?",
    "options": [
      "Arraste outra atividade \"Email\" após a atividade Wait. Selecione o Email 2 criado no Content Builder. Configure as opções de envio.",
      "Agende o envio para a data/hora desejada ou envie imediatamente.",
      "Entenda como o FSC oferece modelos de processos pré-construídos para abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e outras operações financeiras.",
      "\"parent_bu_mid_here\","
    ],
    "answer": "\"parent_bu_mid_here\","
  },
  {
    "question": "O que é * Activity Permissions?",
    "options": [
      "Sentimos sua falta",
      "Conector nativo e bidirecional entre Marketing Cloud e Sales Cloud/Service Cloud.",
      "Garantir que as funções dos usuários tenham as permissões corretas para usar as diferentes atividades do Journey Builder.",
      "Utilize a IA para recursos como Einstein Bots (chatbots para autoatendimento), Einstein Case Classification (classificação automática de casos) e Einstein Article Recommendations (recomendações de artigos para agentes)."
    ],
    "answer": "Garantir que as funções dos usuários tenham as permissões corretas para usar as diferentes atividades do Journey Builder."
  },
  {
    "question": "O que é * Sender Authentication Package (SAP)?",
    "options": [
      "Sentimos sua falta",
      "Configuração de domínios de envio dedicados, IPs dedicados (opcional), autenticação DKIM/SPF, e wrapping de links/imagens para melhorar a entregabilidade e o branding.",
      "Interface principal para visualizar o desempenho de envios individuais, testes A/B e envios acionados.",
      "Automações e Jornadas (Semanas 17-20)"
    ],
    "answer": "Configuração de domínios de envio dedicados, IPs dedicados (opcional), autenticação DKIM/SPF, e wrapping de links/imagens para melhorar a entregabilidade e o branding."
  },
  {
    "question": "O que é * Third-Party Connectors (Conectores de Terceiros)?",
    "options": [
      "Configuração e Integração (Semanas 5-8)",
      "Utilizar conectores pré-construídos para integrar com plataformas populares.",
      "Executa consultas SQL para segmentar dados.",
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano."
    ],
    "answer": "Utilizar conectores pré-construídos para integrar com plataformas populares."
  },
  {
    "question": "O que é * Segmente e Personalize?",
    "options": [
      "Configurar integração com contas do LINE.",
      "Uma chamada de API (REST ou SOAP) é feita para a chave externa da definição, passando o endereço de email do destinatário e quaisquer dados de personalização necessários.",
      "Envie conteúdo relevante para aumentar o engajamento.",
      "Interface principal para visualizar o desempenho de envios individuais, testes A/B e envios acionados."
    ],
    "answer": "Envie conteúdo relevante para aumentar o engajamento."
  },
  {
    "question": "O que é * Fields?",
    "options": [
      "Rastreie e gerencie referências de negócios dentro e fora da instituição, garantindo que as oportunidades sejam encaminhadas e acompanhadas de forma eficiente.",
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas.",
      "SubscriberKey (Text, Primary Key), EmailAddress (EmailAddress), FirstName (Text), LastName (Text), CompanyName (Text)",
      "Comma"
    ],
    "answer": "SubscriberKey (Text, Primary Key), EmailAddress (EmailAddress), FirstName (Text), LastName (Text), CompanyName (Text)"
  },
  {
    "question": "O que é 2. Email 1?",
    "options": [
      "Acesso operacional à respectiva Child BU (criar/editar emails, jornadas, automações) e acesso de visualização a recursos compartilhados",
      "O Marketing Cloud vem com várias funções padrão que cobrem casos de uso comuns:",
      "Sentimos sua falta",
      "Compreenda como estender a funcionalidade do Sales Cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas."
    ],
    "answer": "Sentimos sua falta"
  },
  {
    "question": "O que é * Gerenciamento de Dados e Qualidade?",
    "options": [
      "Aprofundamento e Aplicação no Financial Services Cloud",
      "HubSpot usado pela segunda empresa adquirida",
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados."
    ],
    "answer": "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados."
  },
  {
    "question": "O que é * Email 2?",
    "options": [
      "#4CAF50; color:white; padding:8px 15px; text-decoration:none; border-radius:3px;\">Ver Produto</a>",
      "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades.",
      "Enviado 3 dias após o Email 1, destacando as categorias de produtos mais populares.",
      "\"Synchronized Accounts from Sales Cloud\","
    ],
    "answer": "Enviado 3 dias após o Email 1, destacando as categorias de produtos mais populares."
  },
  {
    "question": "O que é * Tipo de Teste?",
    "options": [
      "Data Extension opcional que registra detalhes de cada envio individual, permitindo análises mais granulares e personalizadas.",
      "Selecione \"Subject Line\" (Linha de Assunto).",
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone).",
      "Configurar notificações por email para administradores quando uma automação falha."
    ],
    "answer": "Selecione \"Subject Line\" (Linha de Assunto)."
  },
  {
    "question": "O que é * Acionamento?",
    "options": [
      "Obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais.",
      "SQL Query",
      "Utilizar conectores pré-construídos para integrar com plataformas populares.",
      "Uma chamada de API (REST ou SOAP) é feita para a chave externa da definição, passando o endereço de email do destinatário e quaisquer dados de personalização necessários."
    ],
    "answer": "Uma chamada de API (REST ou SOAP) é feita para a chave externa da definição, passando o endereço de email do destinatário e quaisquer dados de personalização necessários."
  },
  {
    "question": "O que é * Restrições de Login por IP?",
    "options": [
      "Entreguem mensagens e ofertas personalizadas em escala, no canal certo e no momento certo.",
      "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante.",
      "Limitar o acesso à conta a partir de faixas de IP confiáveis.",
      "Usar os insights dos relatórios para otimizar assuntos, conteúdo, CTAs, segmentação, frequência, horário de envio e estratégias gerais."
    ],
    "answer": "Limitar o acesso à conta a partir de faixas de IP confiáveis."
  },
  {
    "question": "O que é * Permissões?",
    "options": [
      "Configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no Sales Cloud).",
      "Acesso operacional à respectiva Child BU (criar/editar emails, jornadas, automações) e acesso de visualização a recursos compartilhados",
      "SQL Query",
      "Traga dados do Sales/Service Cloud (Contatos, Leads, Contas, Objetos Personalizados) para o Marketing Cloud para segmentação."
    ],
    "answer": "Acesso operacional à respectiva Child BU (criar/editar emails, jornadas, automações) e acesso de visualização a recursos compartilhados"
  },
  {
    "question": "O que é * Integração com Marketing Cloud (Marketing Cloud Connect)?",
    "options": [
      "Sugira respostas prontas para agentes com base no histórico de conversas e no contexto do caso.",
      "Torne o processo de cancelamento simples e rápido.",
      "Entenda como sincronizar dados entre Sales Cloud e Marketing Cloud para campanhas de marketing e vendas coordenadas.",
      "Limitar o acesso à plataforma apenas a partir de redes confiáveis."
    ],
    "answer": "Entenda como sincronizar dados entre Sales Cloud e Marketing Cloud para campanhas de marketing e vendas coordenadas."
  },
  {
    "question": "O que é * Einstein Opportunity Scoring?",
    "options": [
      "Entenda como o FSC oferece modelos de processos pré-construídos para abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e outras operações financeiras.",
      "Avalie a probabilidade de uma oportunidade ser ganha.",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics).",
      "false"
    ],
    "answer": "Avalie a probabilidade de uma oportunidade ser ganha."
  },
  {
    "question": "O que é <span style=\"text-decoration?",
    "options": [
      "Ajuda a garantir que as interações e processos estejam em conformidade com as regulamentações do setor, com registros detalhados e trilhas de auditoria.",
      "line-through;\">R$ %%=FormatNumber(@productPrice, \"N2\", \"pt-BR\")=%%</span><br>",
      "Garantir que os dados estejam corretos e completos (ex: validar endereços de email, normalizar formatos de telefone).",
      "Compreenda como estender a funcionalidade do Sales Cloud através de desenvolvimento personalizado, integrações com sistemas externos e automações complexas."
    ],
    "answer": "line-through;\">R$ %%=FormatNumber(@productPrice, \"N2\", \"pt-BR\")=%%</span><br>"
  },
  {
    "question": "O que é * Acesso?",
    "options": [
      "4 dias",
      "\"Business Unit for Software Division marketing activities\",",
      "Configuração incorreta da fonte de entrada, dados ausentes para critérios de decisão, falhas em atividades (ex: erro ao atualizar registro no Sales Cloud).",
      "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud."
    ],
    "answer": "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud."
  },
  {
    "question": "O que é * Trailhead?",
    "options": [
      "Módulo \"Financial Services Cloud Basics\".",
      "Ferramentas para que os vendedores possam enviar e-mails personalizados e rastrear o engajamento dos leads.",
      "Geralmente acessível através do menu suspenso com o nome do usuário no canto superior direito da interface principal do Marketing Cloud.",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento."
    ],
    "answer": "Módulo \"Financial Services Cloud Basics\"."
  },
  {
    "question": "O que é * Atividade 3 (Email 2)?",
    "options": [
      "Arraste outra atividade \"Email\" após a atividade Wait. Selecione o Email 2 criado no Content Builder. Configure as opções de envio.",
      "Garantir que as funções dos usuários tenham as permissões corretas para usar as diferentes atividades do Journey Builder.",
      "Desempenho geral de envios em um período.",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento."
    ],
    "answer": "Arraste outra atividade \"Email\" após a atividade Wait. Selecione o Email 2 criado no Content Builder. Configure as opções de envio."
  },
  {
    "question": "O que é * Assunto?",
    "options": [
      "A implementação de dashboards de monitoramento permitiu identificar problemas rapidamente e fazer ajustes.",
      "Usar o Tracking do Email Studio, relatórios do Marketing Cloud, Google Postmaster Tools, Microsoft SNDS e ferramentas de terceiros para acompanhar métricas de entregabilidade e reputação.",
      "Implemente funcionalidades para garantir a conformidade com regulamentações financeiras (ex: KYC - Know Your Customer, AML - Anti-Money Laundering), com trilhas de auditoria detalhadas e gerenciamento de consentimento.",
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B)."
    ],
    "answer": "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B)."
  },
  {
    "question": "O que é * Actionable Relationship Center (ARC)?",
    "options": [
      "Utilize o ARC para visualizar e navegar por redes de relacionamento complexas, identificar oportunidades e tomar ações diretamente do gráfico.",
      "Arraste outra atividade \"Email\" após a atividade Wait. Selecione o Email 2 criado no Content Builder. Configure as opções de envio.",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics).",
      "Uma chamada de API (REST ou SOAP) é feita para a chave externa da definição, passando o endereço de email do destinatário e quaisquer dados de personalização necessários."
    ],
    "answer": "Utilize o ARC para visualizar e navegar por redes de relacionamento complexas, identificar oportunidades e tomar ações diretamente do gráfico."
  },
  {
    "question": "O que é * Click-Through Rate (CTR - Taxa de Cliques)?",
    "options": [
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)",
      "Configurar integração com contas do LINE.",
      "[",
      "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo."
    ],
    "answer": "(Cliques Totais / Entregues) * 100. Mede o engajamento com o conteúdo."
  },
  {
    "question": "O que é * Relatórios e Dashboards?",
    "options": [
      "Quais são as possíveis causas para essa alta taxa de Hard Bounce e quais ações um Email Specialist deve tomar para investigar e mitigar o problema?",
      "Monitore o desempenho do atendimento ao cliente com relatórios e dashboards personalizáveis, analisando métricas como tempo médio de resolução, satisfação do cliente e volume de casos.",
      "Configurar notificações por email para administradores quando uma automação falha.",
      "Enviar para listas compradas, antigas ou com muitos endereços inválidos prejudica gravemente a reputação e a entregabilidade. Focar em listas opt-in (preferencialmente double opt-in) é essencial."
    ],
    "answer": "Monitore o desempenho do atendimento ao cliente com relatórios e dashboards personalizáveis, analisando métricas como tempo médio de resolução, satisfação do cliente e volume de casos."
  },
  {
    "question": "O que é * Aquecimento de IP (IP Warming)?",
    "options": [
      "Novo contato adicionado ao CRM",
      "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs.",
      "_spf.salesforce.com include:_spf.multitech.com ~all",
      "EmailAddress, Length: 254)"
    ],
    "answer": "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs."
  },
  {
    "question": "O que é * Qualidade da Lista?",
    "options": [
      "Novo.",
      "Gerenciar pacotes de API, definindo escopos de permissão específicos para cada integração.",
      "Enviar para listas compradas, antigas ou com muitos endereços inválidos prejudica gravemente a reputação e a entregabilidade. Focar em listas opt-in (preferencialmente double opt-in) é essencial.",
      "Enviado 3 dias após o Email 1, destacando as categorias de produtos mais populares."
    ],
    "answer": "Enviar para listas compradas, antigas ou com muitos endereços inválidos prejudica gravemente a reputação e a entregabilidade. Focar em listas opt-in (preferencialmente double opt-in) é essencial."
  },
  {
    "question": "O que é * Mobilidade?",
    "options": [
      "Acesse informações e gerencie atividades de vendas de qualquer lugar, a qualquer hora, através de dispositivos móveis.",
      "Conector nativo e bidirecional entre Marketing Cloud e Sales Cloud/Service Cloud.",
      "\"LastModified\",",
      "Estratégias para garantir a qualidade dos dados no Sales Cloud, incluindo desduplicação, validação e enriquecimento de dados."
    ],
    "answer": "Acesse informações e gerencie atividades de vendas de qualquer lugar, a qualquer hora, através de dispositivos móveis."
  },
  {
    "question": "O que é * Clientes 'Gold' devem ver?",
    "options": [
      "Deixe o assunto padrão do email (ele será sobrescrito no teste A/B).",
      "Processo gradual de aumento do volume de envio para um novo IP ou um IP com reputação baixa, para construir confiança com os ISPs.",
      "Enviado 3 dias após o Email 1, destacando as categorias de produtos mais populares.",
      "\"Ofertas Exclusivas para Membros Gold!\""
    ],
    "answer": "\"Ofertas Exclusivas para Membros Gold!\""
  },
  {
    "question": "O que é 3. Plataforma C?",
    "options": [
      "Arraste outra atividade \"Email\" após a atividade Wait. Selecione o Email 2 criado no Content Builder. Configure as opções de envio.",
      "um gráfico de barras mostrando leads por pontuação, um medidor para oportunidades de alto valor).",
      "HubSpot usado pela segunda empresa adquirida",
      "Quais são as possíveis causas para essa alta taxa de Hard Bounce e quais ações um Email Specialist deve tomar para investigar e mitigar o problema?"
    ],
    "answer": "HubSpot usado pela segunda empresa adquirida"
  },
  {
    "question": "O que é * Integração com Outras Clouds?",
    "options": [
      "Aproveitem o poder do Salesforce Einstein (IA da Salesforce) para obter insights, prever comportamentos, personalizar conteúdo e otimizar jornadas.",
      "Como parte do Salesforce Customer 360, o Service Cloud se integra perfeitamente com outras Clouds da Salesforce, garantindo uma experiência de cliente consistente em todos os pontos de contato.",
      "Jornada de Boas-Vindas Simples",
      "Mantenha um registro detalhado de todas as contas de clientes e seus contatos associados, incluindo histórico de interações, comunicações e atividades."
    ],
    "answer": "Como parte do Salesforce Customer 360, o Service Cloud se integra perfeitamente com outras Clouds da Salesforce, garantindo uma experiência de cliente consistente em todos os pontos de contato."
  },
  {
    "question": "O que é 2. VAR @LoyaltyTier, @HeaderText?",
    "options": [
      "Para jornadas multi-etapas, cross-channel, baseadas em comportamento e eventos, que exigem lógica de fluxo (esperas, decisões).",
      "Declara as variáveis que serão usadas.",
      "O Marketing Cloud oferece uma variedade de templates básicos e temáticos prontos para usar.",
      "Gerencia importações/exportações e segmentação, mas não cria conteúdo"
    ],
    "answer": "Declara as variáveis que serão usadas."
  },
  {
    "question": "O que é * Processos de Negócios Financeiros (Financial Services Processes)?",
    "options": [
      "Entenda como o FSC oferece modelos de processos pré-construídos para abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e outras operações financeiras.",
      "Confirmação de pedido, redefinição de senha, notificação de envio, alerta de conta, confirmação de inscrição (single opt-in).",
      "Aprofunde-se nos recursos de IA, como:",
      "EmailAddress, Length: 254)"
    ],
    "answer": "Entenda como o FSC oferece modelos de processos pré-construídos para abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e outras operações financeiras."
  },
  {
    "question": "O que é 4. Bloqueios por ISPs?",
    "options": [
      "Segmentação - Novos Clientes",
      "Embora mais comum para Soft Bounces, bloqueios severos ou problemas de reputação podem, em alguns casos, ser reportados como Hard Bounces por certos ISPs.",
      "Configurar conexões com outras nuvens Salesforce (Marketing Cloud Connect), APIs e sistemas externos.",
      "Módulos \"Financial Services Cloud for Wealth Management\", \"Financial Services Cloud for Banking\"."
    ],
    "answer": "Embora mais comum para Soft Bounces, bloqueios severos ou problemas de reputação podem, em alguns casos, ser reportados como Hard Bounces por certos ISPs."
  },
  {
    "question": "O que é Objetivo?",
    "options": [
      "Segmentação - Novos Clientes",
      "Automatize e otimize processos como abertura de contas, solicitação de empréstimos, gerenciamento de sinistros e planejamento financeiro, com fluxos de trabalho e modelos de dados adaptados.",
      "Um novo cliente se inscreve na newsletter da TechGadgets através de um formulário no site. A empresa quer enviar uma série de 2 emails de boas-vindas.",
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas."
    ],
    "answer": "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas."
  },
  {
    "question": "O que é * Field-Level Encryption (FLE - Criptografia em Nível de Campo)?",
    "options": [
      "Read",
      "Módulo focado em um canal (Email Studio, Mobile Studio, Social Studio, Advertising Studio).",
      "Permite criptografar campos específicos dentro de Data Extensions que contenham dados sensíveis (PII - Personally Identifiable Information). Requer configuração e gerenciamento de chaves. Os dados criptografados não podem ser usados diretamente em segmentações ou personalização sem descriptografia (geralmente via script).",
      "ISPs monitoram se os destinatários abrem, clicam, marcam como importantes ou movem emails para a caixa de entrada. Alto engajamento sinaliza que os emails são desejados."
    ],
    "answer": "Permite criptografar campos específicos dentro de Data Extensions que contenham dados sensíveis (PII - Personally Identifiable Information). Requer configuração e gerenciamento de chaves. Os dados criptografados não podem ser usados diretamente em segmentações ou personalização sem descriptografia (geralmente via script)."
  },
  {
    "question": "O que é * Integrações com Sistemas Core?",
    "options": [
      "Sentimos sua falta",
      "APIs e conectores para integrar o FSC com sistemas bancários, de investimento e de seguros existentes, permitindo a troca de dados em tempo real.",
      "Ferramentas para rastrear e gerenciar referências internas e externas, garantindo que as oportunidades de negócios sejam encaminhadas e acompanhadas adequadamente.",
      "(Deixe como Off por enquanto, ou configure se necessário)."
    ],
    "answer": "APIs e conectores para integrar o FSC com sistemas bancários, de investimento e de seguros existentes, permitindo a troca de dados em tempo real."
  },
  {
    "question": "O que é * Subscribers (Assinantes)?",
    "options": [
      "Configuração das Jornadas/Campanhas",
      "Entidade central que representa um indivíduo que pode receber comunicações. Cada assinante tem um registro na All Subscribers List (lista de todos os assinantes).",
      "Boas-vindas e introdução (Dia 0)",
      "Agende o envio para a data/hora desejada ou envie imediatamente."
    ],
    "answer": "Entidade central que representa um indivíduo que pode receber comunicações. Cada assinante tem um registro na All Subscribers List (lista de todos os assinantes)."
  },
  {
    "question": "O que é * Revenue per Email (Receita por Email)?",
    "options": [
      "Receita total gerada / Número de emails entregues.",
      "Deixe o Einstein escolher a melhor imagem/bloco de conteúdo para cada indivíduo com base em seu perfil e comportamento.",
      "Entidade central que representa um indivíduo que pode receber comunicações. Cada assinante tem um registro na All Subscribers List (lista de todos os assinantes).",
      "Import File"
    ],
    "answer": "Receita total gerada / Número de emails entregues."
  },
  {
    "question": "O que é Tarefa?",
    "options": [
      "MultiTech Solutions Setor: Tecnologia e Serviços B2B Tamanho: Médio porte (800 funcionários, 4 escritórios regionais)",
      "\"Regional Marketing\" (uma para cada região)",
      "SubscriberKey (Text, Primary Key), EmailAddress (EmailAddress), FirstName (Text), LastName (Text), CompanyName (Text)",
      "Escreva o bloco de código AMPscript para exibir o cabeçalho dinâmico dentro de um Bloco de Conteúdo HTML no Content Builder."
    ],
    "answer": "Escreva o bloco de código AMPscript para exibir o cabeçalho dinâmico dentro de um Bloco de Conteúdo HTML no Content Builder."
  },
  {
    "question": "O que é * \"CartItemID ASC\"?",
    "options": [
      "Cláusula de ordenação (importante para pegar os 'primeiros' itens de forma consistente). Você pode ordenar por outro campo relevante.",
      "Utilizar conectores pré-construídos para integrar com plataformas populares.",
      "File Transfer",
      "Implementar jornadas de cliente baseadas em comportamento"
    ],
    "answer": "Cláusula de ordenação (importante para pegar os 'primeiros' itens de forma consistente). Você pode ordenar por outro campo relevante."
  },
  {
    "question": "O que é * API?",
    "options": [
      "Acesso rápido a objetos como Casos, Contas, Contatos, Artigos, etc.",
      "Usar as APIs REST/SOAP do Marketing Cloud para enviar dados do e-commerce em tempo real ou em lote.",
      "Processar e gerenciar emails que retornam (hard bounces, soft bounces) para manter a lista saudável.",
      "Crie chatbots para autoatendimento que podem responder a perguntas comuns, coletar informações e até mesmo criar casos ou encaminhar para um agente humano."
    ],
    "answer": "Usar as APIs REST/SOAP do Marketing Cloud para enviar dados do e-commerce em tempo real ou em lote."
  },
  {
    "question": "O que é * Entrada?",
    "options": [
      "Média.",
      "\"LastModified\",",
      "Novo contato adicionado ao CRM",
      "Configurar a captura de leads de anúncios do Facebook ou Google diretamente para Data Extensions ou Sales Cloud."
    ],
    "answer": "Novo contato adicionado ao CRM"
  },
  {
    "question": "O que é * Server-Side JavaScript (SSJS)?",
    "options": [
      "\"Ofertas Exclusivas para Membros Gold!\"",
      "Dominar a automação de vendas, a gestão de pipeline, a previsão de vendas e a utilização de ferramentas de produtividade para otimizar o processo de vendas.",
      "Usar Core e Platform functions, interagir com APIs via WSProxy (mais eficiente que HTTP calls diretos para a API SOAP), combinar SSJS e AMPscript.",
      "Utilizar conectores pré-construídos para integrar com plataformas populares."
    ],
    "answer": "Usar Core e Platform functions, interagir com APIs via WSProxy (mais eficiente que HTTP calls diretos para a API SOAP), combinar SSJS e AMPscript."
  },
  {
    "question": "O que é \"name\"?",
    "options": [
      "Otimização e Estratégia no Service Cloud",
      "\"LastModified\",",
      "#4CAF50; color:white; padding:8px 15px; text-decoration:none; border-radius:3px;\">Ver Produto</a>",
      "Torne o processo de cancelamento simples e rápido."
    ],
    "answer": "\"LastModified\","
  },
  {
    "question": "O que é * Synchronized Data Extensions?",
    "options": [
      "Configurar notificações por email para administradores quando uma automação falha.",
      "Encontre rapidamente qualquer registro na plataforma.",
      "Data Extensions que sincronizam automaticamente dados do Sales Cloud ou Service Cloud.",
      "Novo contato adicionado ao CRM"
    ],
    "answer": "Data Extensions que sincronizam automaticamente dados do Sales Cloud ou Service Cloud."
  },
  {
    "question": "O que é * Objetivo?",
    "options": [
      "Enviado imediatamente após a inscrição, agradecendo e oferecendo um cupom de 10% de desconto.",
      "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante.",
      "Entidade central que representa um indivíduo que pode receber comunicações. Cada assinante tem um registro na All Subscribers List (lista de todos os assinantes).",
      "(Deixe como Off por enquanto, ou configure se necessário)."
    ],
    "answer": "Testar diferentes versões de um email (assunto, nome do remetente, conteúdo, call-to-action, horário de envio) para determinar qual performa melhor com uma pequena porção da sua lista antes de enviar para o restante."
  },
  {
    "question": "O que é Estudo de Caso Avançado?",
    "options": [
      "420%",
      "Obrigatório por lei, deve conter informações do remetente, link de cancelamento de inscrição (opt-out) e, opcionalmente, links para política de privacidade e redes sociais.",
      "Personalização de Ofertas com Einstein Next Best Action",
      "Tabelas para armazenar dados. Pense nelas como planilhas ou tabelas de banco de dados. São a base para segmentação e personalização."
    ],
    "answer": "Personalização de Ofertas com Einstein Next Best Action"
  },
  {
    "question": "O que é * Email Send Performance?",
    "options": [
      "Como parte do Salesforce Customer 360, o Service Cloud se integra perfeitamente com outras Clouds da Salesforce, garantindo uma experiência de cliente consistente em todos os pontos de contato.",
      "Desempenho geral de envios em um período.",
      "Módulo \"Financial Services Cloud Basics\".",
      "false"
    ],
    "answer": "Desempenho geral de envios em um período."
  },
  {
    "question": "O que é * Ajuda Salesforce?",
    "options": [
      "Documentação oficial sobre cada Studio e Builder.",
      "Acesse informações e gerencie atividades de vendas de qualquer lugar, a qualquer hora, através de dispositivos móveis.",
      "(Número de Conversões / Entregues) * 100. Mede a ação final desejada (compra, download, etc.). Requer rastreamento adicional (ex: parâmetros UTM e Google Analytics).",
      "Agende o envio para a data/hora desejada ou envie imediatamente."
    ],
    "answer": "Documentação oficial sobre cada Studio e Builder."
  },
  {
    "question": "O que é 11. <td>R$ %%=FormatNumber(@Price, \"N2\", \"pt-BR\")=%%</td>?",
    "options": [
      "Exibe o preço formatado como moeda brasileira.",
      "Um novo cliente se inscreve na newsletter da TechGadgets através de um formulário no site. A empresa quer enviar uma série de 2 emails de boas-vindas.",
      "Uma alta taxa de Hard Bounce, especialmente em listas antigas, indica problemas com a qualidade e validade dos endereços. A ação principal é focar na higiene da lista, removendo endereços inválidos e inativos, e revisando os processos de coleta para evitar a entrada de emails ruins. O monitoramento contínuo e estratégias de reengajamento cuidadosas são essenciais para manter a saúde da lista e a entregabilidade.",
      "Read"
    ],
    "answer": "Exibe o preço formatado como moeda brasileira."
  }
];
