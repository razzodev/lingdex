import {action,observable, makeObservable,computed} from 'mobx'
import {AppStore} from './AppStore'
export class ContentStore {
    appStore;
    language='en'
    wordList=[];
    currPage = 'no page'
    constructor(appStore){
        makeObservable(this,{
            wordList:observable,
            currPage:observable,
            addWord:action,
            setCurrPage:action,
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
    setCurrPage(page){
        this.currPage = page;
    }
    get getWordList(){
        return this.wordList
    }
    
}