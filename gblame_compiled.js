if(!lt.util.load.provided_QMARK_('lt.plugins.gblame')) {
goog.provide('lt.plugins.gblame');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.gblame.exec = require("child_process").exec;
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617),new cljs.core.Keyword(null,"width","width",1127031096),200);
lt.plugins.gblame.blame_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617));
lt.plugins.gblame.__BEH__git_blame_settings = (function __BEH__git_blame_settings(this$,new_width){return lt.object.merge_BANG_.call(null,lt.plugins.gblame.blame_settings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),new_width], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__git_blame_settings,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Git Blame settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Blame gutter width (pixels)",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.gblame.sha_from_git_string = (function sha_from_git_string(git_string){return clojure.string.replace.call(null,clojure.string.join.call(null,cljs.core.take.call(null,8,git_string)),"^","");
});
lt.plugins.gblame.line_from_git_string = (function line_from_git_string(git_string){return (cljs.core.second.call(null,cljs.core.re_matches.call(null,/^.[a-f0-9]{7}\s+(\d+)\s+.*$/,git_string)) | 0);
});
lt.plugins.gblame.gblame_gutter_marker = (function gblame_gutter_marker(this$,git_content){var e__8186__auto__ = crate.core.html.call(null,(function (){var display_string = clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,git_content,/\s*\d+\).*$/,")"),/^(.[a-z0-9]+)\s+.*?\d+\s+/,"$1 ");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.GBlame-gutter-marker","div.GBlame-gutter-marker",3321821686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings))),cljs.core.str("px; white-space: nowrap; overflow: hidden;")].join('')], null),display_string], null);
})());var seq__8819_8843 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var sha = lt.plugins.gblame.sha_from_git_string.call(null,git_content);var line = lt.plugins.gblame.line_from_git_string.call(null,git_content);if(cljs.core._EQ_.call(null,"00000000",sha))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.gblame","git-blame-clicked","lt.plugins.gblame/git-blame-clicked",2441192571),lt.plugins.gblame.sha_from_git_string.call(null,git_content),lt.plugins.gblame.line_from_git_string.call(null,git_content));
}
})], null)));var chunk__8820_8844 = null;var count__8821_8845 = 0;var i__8822_8846 = 0;while(true){
if((i__8822_8846 < count__8821_8845))
{var vec__8823_8847 = cljs.core._nth.call(null,chunk__8820_8844,i__8822_8846);var ev__8187__auto___8848 = cljs.core.nth.call(null,vec__8823_8847,0,null);var func__8188__auto___8849 = cljs.core.nth.call(null,vec__8823_8847,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8848,func__8188__auto___8849);
{
var G__8850 = seq__8819_8843;
var G__8851 = chunk__8820_8844;
var G__8852 = count__8821_8845;
var G__8853 = (i__8822_8846 + 1);
seq__8819_8843 = G__8850;
chunk__8820_8844 = G__8851;
count__8821_8845 = G__8852;
i__8822_8846 = G__8853;
continue;
}
} else
{var temp__4092__auto___8854 = cljs.core.seq.call(null,seq__8819_8843);if(temp__4092__auto___8854)
{var seq__8819_8855__$1 = temp__4092__auto___8854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8819_8855__$1))
{var c__7564__auto___8856 = cljs.core.chunk_first.call(null,seq__8819_8855__$1);{
var G__8857 = cljs.core.chunk_rest.call(null,seq__8819_8855__$1);
var G__8858 = c__7564__auto___8856;
var G__8859 = cljs.core.count.call(null,c__7564__auto___8856);
var G__8860 = 0;
seq__8819_8843 = G__8857;
chunk__8820_8844 = G__8858;
count__8821_8845 = G__8859;
i__8822_8846 = G__8860;
continue;
}
} else
{var vec__8824_8861 = cljs.core.first.call(null,seq__8819_8855__$1);var ev__8187__auto___8862 = cljs.core.nth.call(null,vec__8824_8861,0,null);var func__8188__auto___8863 = cljs.core.nth.call(null,vec__8824_8861,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8862,func__8188__auto___8863);
{
var G__8864 = cljs.core.next.call(null,seq__8819_8855__$1);
var G__8865 = null;
var G__8866 = 0;
var G__8867 = 0;
seq__8819_8843 = G__8864;
chunk__8820_8844 = G__8865;
count__8821_8845 = G__8866;
i__8822_8846 = G__8867;
continue;
}
}
} else
{}
}
break;
}
return e__8186__auto__;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gblame","show-git-blame","lt.plugins.gblame/show-git-blame",2747939297),new cljs.core.Keyword(null,"desc","desc",1016984067),"Git Blame: Show/update git blame for file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var active_ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.gblame.run_git_blame_on_path_and_content.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_ed))),lt.objs.editor.__GT_val.call(null,active_ed),active_ed);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),new cljs.core.Keyword(null,"desc","desc",1016984067),"Git Blame: Remove",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gblame","toggle-git-blame","lt.plugins.gblame/toggle-git-blame",3420445200),new cljs.core.Keyword(null,"desc","desc",1016984067),"Git Blame: Toggle",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.gblame","toggle-git-blame","lt.plugins.gblame/toggle-git-blame",3420445200));
})], null));
lt.plugins.gblame.__BEH__log_errors = (function __BEH__log_errors(this$,message){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
return lt.objs.notifos.done_working.call(null,[cljs.core.str("GBlame: "),cljs.core.str(message)].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","log-errors","lt.plugins.gblame/log-errors",1622224753),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__log_errors,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blame-failed","blame-failed",2882043405),null], null), null));
lt.plugins.gblame.__BEH__show_blame_data = (function __BEH__show_blame_data(this$,data){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var git_lines = clojure.string.split_lines.call(null,data);var gutter_markers = cljs.core.map.call(null,((function (git_lines){
return (function (p1__8825_SHARP_){return lt.plugins.gblame.gblame_gutter_marker.call(null,this$,p1__8825_SHARP_);
});})(git_lines))
,git_lines);var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);lt.objs.editor.operation.call(null,this$,(function (){lt.objs.editor.add_gutter.call(null,this$,"GBlame-gutter",new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings)));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,gutter_marker){return ed.setGutterMarker(idx,"GBlame-gutter",gutter_marker);
}),gutter_markers));
lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
return lt.objs.notifos.done_working.call(null);
}));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","show-blame-data","lt.plugins.gblame/show-blame-data",967576621),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__show_blame_data,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-blame-data","show-blame-data",688429514),null], null), null));
lt.plugins.gblame.__BEH__open_git_diff = (function __BEH__open_git_diff(this$,sha,line){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.plugins.gblame.open_diff.call(null,sha,path,line);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","open-git-diff","lt.plugins.gblame/open-git-diff",4597116680),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__open_git_diff,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-clicked","lt.plugins.gblame/git-blame-clicked",2441192571),null], null), null));
lt.plugins.gblame.__BEH__remove_git_blame = (function __BEH__remove_git_blame(this$){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
return lt.objs.editor.remove_gutter.call(null,this$,"GBlame-gutter");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__remove_git_blame,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),null], null), null));
lt.plugins.gblame.__BEH__toggle_git_blame = (function __BEH__toggle_git_blame(this$){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544));
} else
{var active_ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.gblame.run_git_blame_on_path_and_content.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_ed))),lt.objs.editor.__GT_val.call(null,active_ed),active_ed);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","toggle-git-blame","lt.plugins.gblame/toggle-git-blame",3420445200),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__toggle_git_blame,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","toggle-git-blame","lt.plugins.gblame/toggle-git-blame",3420445200),null], null), null));
lt.plugins.gblame.run_background_blame = lt.objs.thread.thread_STAR_.call(null,(function tfun8826(){var orig__8259__auto__ = argsArray(arguments);var msg__8260__auto__ = orig__8259__auto__.shift();var args__8261__auto__ = orig__8259__auto__.map(cljs.reader.read_string);var raise = ((function (orig__8259__auto__,msg__8260__auto__,args__8261__auto__){
return (function (obj__8262__auto__,k__8263__auto__,v__8264__auto__){return _send(obj__8262__auto__,k__8263__auto__,cljs.core.pr_str.call(null,v__8264__auto__),"clj");
});})(orig__8259__auto__,msg__8260__auto__,args__8261__auto__))
;args__8261__auto__.unshift(msg__8260__auto__.obj);
return (function (return_obj,cwd,path,content){var child_proc = require("child_process").exec([cljs.core.str("git blame -n --date short --contents - "),cljs.core.str("'"),cljs.core.str(path),cljs.core.str("'")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",cwd], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return raise.call(null,return_obj,new cljs.core.Keyword(null,"blame-failed","blame-failed",2882043405),stderr);
} else
{return raise.call(null,return_obj,new cljs.core.Keyword(null,"show-blame-data","show-blame-data",688429514),stdout);
}
}));var proc_input = child_proc.stdin;return proc_input.end(content);
}).apply(null,args__8261__auto__);
}));
lt.plugins.gblame.run_git_blame_on_path_and_content = (function run_git_blame_on_path_and_content(path,content,return_obj){lt.objs.notifos.working.call(null,"Getting git blame");
lt.object.merge_BANG_.call(null,return_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-output","lt.plugins.gblame/git-blame-output",2667398863),""], null));
lt.object.add_tags.call(null,return_obj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
return lt.plugins.gblame.run_background_blame.call(null,return_obj,lt.objs.files.parent.call(null,path),path,content);
});
lt.plugins.gblame.hunk_spec = (function hunk_spec(line){return cljs.core.map.call(null,cljs.core.int$,cljs.core.rest.call(null,cljs.core.re_matches.call(null,/@@ -\d+,\d+ \+(\d+),(\d+) @@/,line)));
});
lt.plugins.gblame.diff_line_mappings = (function diff_line_mappings(diff){var lines = cljs.core.map_indexed.call(null,(function (diff_line_no,line){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,diff_line_no], null);
}),clojure.string.split_lines.call(null,diff));return cljs.core.reduce.call(null,(function (mappings,p__8830){var vec__8831 = p__8830;var line = cljs.core.nth.call(null,vec__8831,0,null);var diff_line_no = cljs.core.nth.call(null,vec__8831,1,null);var vec__8832 = cljs.core.last.call(null,mappings);var hunk = cljs.core.nth.call(null,vec__8832,0,null);var hunk_lines = cljs.core.nth.call(null,vec__8832,1,null);if(cljs.core.truth_(cljs.core.re_find.call(null,/^@@/,line)))
{return cljs.core.conj.call(null,mappings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gblame.hunk_spec.call(null,line),cljs.core.PersistentVector.EMPTY], null));
} else
{return cljs.core.conj.call(null,cljs.core.pop.call(null,mappings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hunk,cljs.core.conj.call(null,hunk_lines,diff_line_no)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),cljs.core.PersistentVector.EMPTY], null)], null),lines);
});
lt.plugins.gblame.src_line_to_diff_line = (function src_line_to_diff_line(line,mappings){var mapping = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__8840){var vec__8841 = p__8840;var vec__8842 = cljs.core.nth.call(null,vec__8841,0,null);var start_hunk = cljs.core.nth.call(null,vec__8842,0,null);var num_lines = cljs.core.nth.call(null,vec__8842,1,null);var _ = cljs.core.nth.call(null,vec__8841,1,null);return ((line >= start_hunk)) && ((line <= (start_hunk + num_lines)));
}),mappings));var vec__8838 = mapping;var vec__8839 = cljs.core.nth.call(null,vec__8838,0,null);var start_hunk = cljs.core.nth.call(null,vec__8839,0,null);var num_lines = cljs.core.nth.call(null,vec__8839,1,null);var line_mappings = cljs.core.nth.call(null,vec__8838,1,null);var line_offset_into_hunk = (line - start_hunk);return cljs.core.nth.call(null,line_mappings,line_offset_into_hunk);
});
lt.plugins.gblame.open_diff = (function open_diff(sha,path,line){var new_ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-separator","line-separator",3195996094),"\n",new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(lt.objs.files.basename.call(null,path)),cljs.core.str(" @ "),cljs.core.str(sha)].join('')], null));lt.object.add_tags.call(null,new_ed,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.read-only","editor.read-only",1341634996),null], null), null));
lt.objs.editor.pool.set_syntax_by_path.call(null,new_ed,"foo.diff");
lt.objs.tabs.add_BANG_.call(null,new_ed);
lt.objs.tabs.active_BANG_.call(null,new_ed);
return lt.plugins.gblame.exec.call(null,[cljs.core.str("git show --no-color "),cljs.core.str(sha),cljs.core.str(" "),cljs.core.str("'"),cljs.core.str(path),cljs.core.str("'")].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",lt.objs.files.parent.call(null,path)], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return console.log([err,stderr]);
} else
{lt.objs.editor.set_val.call(null,new_ed,stdout);
var mappings = lt.plugins.gblame.diff_line_mappings.call(null,stdout);var diff_line = lt.plugins.gblame.src_line_to_diff_line.call(null,line,mappings);lt.objs.editor.move_cursor.call(null,new_ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),diff_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return lt.objs.editor.center_cursor.call(null,new_ed);
}
}));
});
}

//# sourceMappingURL=gblame_compiled.js.map