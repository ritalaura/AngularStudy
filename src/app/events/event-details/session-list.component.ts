import { Component, Input, OnChanges, RendererStyleFlags2 } from "@angular/core";
import { ISession } from "../shared";

@Component ({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions:ISession[]
    @Input() filterBy: string;
    @Input() sortBy: string;

    visibleSession: ISession[] = [];

  ngOnChanges(){
    if(this.sessions){
        this.filterSessions(this.filterBy);
        this.sortBy === 'name' ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter){
    if(filter === 'all'){
        this.visibleSession = this.sessions.slice(0);
    } else{
        this.visibleSession = this.sessions.filter(session => {
            return session.level.toLocaleLowerCase() === filter;
        })
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length
}