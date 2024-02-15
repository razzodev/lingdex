import {action,observable, makeObservable,computed} from 'mobx'
import {AppStore} from './AppStore'
export class ContentStore {
    appStore;
    language='en'
    wordList=[];
    constructor(appStore){
        makeObservable(this,{
            wordList:observable,
            addWord:action,
            removeWord:action,
            setLanguage:action,
            getWordList:computed
        });
        this.appStore = appStore;

    }
    setLanguage(lang){
        this.language = lang;
    }
    addWord(payload){
        this.wordList.push(payload);
    }
    removeWord(payload){
        this.wordList.filter((item)=> item !== payload);
    }
    get getWordList(){
        return this.wordList
    }
    
}