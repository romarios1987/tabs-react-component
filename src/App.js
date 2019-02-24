import React, {Component} from 'react';
import './App.css';
import Tabs from "./Tabs/Tabs";
import Tab from "./Tabs/Tab";


class App extends Component {

  state = {
    activeTabIndex: 0
  };

  handleTabChange = (tabIndex) => this.setState({activeTabIndex: tabIndex});

  render() {
    return (
          <div className="app">
            <div className="container">
              <h1>Tabs Component</h1>
              <div className="wrapper-tabs">
                <Tabs defaultActiveTabIndex={this.state.activeTabIndex} onTabChange={this.handleTabChange}>
                  <Tab tabName="Tab 1">
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                  </Tab>
                  <Tab tabName="Tab 2">
                    Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.
                    Его
                    корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
                  </Tab>
                  <Tab tabName="Tab 3">
                    Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и
                    1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914
                    год.
                  </Tab>
                  <Tab tabName="Tab 4">
                    Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
                    например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам
                    нужен
                    Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине
                    абзаца.
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
    );
  }
}

export default App;


