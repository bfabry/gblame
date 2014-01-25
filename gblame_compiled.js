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



lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617),new cljs.core.Keyword(null,"width","width",1127031096),300);

lt.plugins.gblame.blame_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617));

lt.plugins.gblame.__BEH__git_blame_settings = (function __BEH__git_blame_settings(this$,new_width){return lt.object.merge_BANG_.call(null,lt.plugins.gblame.blame_settings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),new_width], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__git_blame_settings,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Git Blame settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Blame gutter width (pixels)",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);

lt.plugins.gblame.sha_from_git_string = (function sha_from_git_string(git_string){return clojure.string.replace.call(null,clojure.string.join.call(null,cljs.core.take.call(null,8,git_string)),"^","");
});

lt.plugins.gblame.line_from_git_string = (function line_from_git_string(git_string){return (cljs.core.second.call(null,cljs.core.re_matches.call(null,/^.[a-f0-9]{7}\s+(\d+)\s+.*$/,git_string)) | 0);
});

lt.plugins.gblame.gblame_gutter_marker = (function gblame_gutter_marker(this$,git_content){var e__8081__auto__ = crate.core.html.call(null,(function (){var display_string = clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,git_content,/\s*\d+\).*$/,")"),/^(.[a-z0-9]+)\s+\d+\s+/,"$1 ");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.GBlame-gutter-marker","div.GBlame-gutter-marker",3321821686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings))),cljs.core.str("px; white-space: nowrap; overflow: hidden;")].join('')], null),display_string], null);
})());var seq__8621_8644 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var sha = lt.plugins.gblame.sha_from_git_string.call(null,git_content);var line = lt.plugins.gblame.line_from_git_string.call(null,git_content);if(cljs.core._EQ_.call(null,"00000000",sha))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.gblame","git-blame-clicked","lt.plugins.gblame/git-blame-clicked",2441192571),lt.plugins.gblame.sha_from_git_string.call(null,git_content),lt.plugins.gblame.line_from_git_string.call(null,git_content));
}
})], null)));var chunk__8622_8645 = null;var count__8623_8646 = 0;var i__8624_8647 = 0;while(true){
if((i__8624_8647 < count__8623_8646))
{var vec__8625_8648 = cljs.core._nth.call(null,chunk__8622_8645,i__8624_8647);var ev__8082__auto___8649 = cljs.core.nth.call(null,vec__8625_8648,0,null);var func__8083__auto___8650 = cljs.core.nth.call(null,vec__8625_8648,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8649,func__8083__auto___8650);
{
var G__8651 = seq__8621_8644;
var G__8652 = chunk__8622_8645;
var G__8653 = count__8623_8646;
var G__8654 = (i__8624_8647 + 1);
seq__8621_8644 = G__8651;
chunk__8622_8645 = G__8652;
count__8623_8646 = G__8653;
i__8624_8647 = G__8654;
continue;
}
} else
{var temp__4092__auto___8655 = cljs.core.seq.call(null,seq__8621_8644);if(temp__4092__auto___8655)
{var seq__8621_8656__$1 = temp__4092__auto___8655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8621_8656__$1))
{var c__7470__auto___8657 = cljs.core.chunk_first.call(null,seq__8621_8656__$1);{
var G__8658 = cljs.core.chunk_rest.call(null,seq__8621_8656__$1);
var G__8659 = c__7470__auto___8657;
var G__8660 = cljs.core.count.call(null,c__7470__auto___8657);
var G__8661 = 0;
seq__8621_8644 = G__8658;
chunk__8622_8645 = G__8659;
count__8623_8646 = G__8660;
i__8624_8647 = G__8661;
continue;
}
} else
{var vec__8626_8662 = cljs.core.first.call(null,seq__8621_8656__$1);var ev__8082__auto___8663 = cljs.core.nth.call(null,vec__8626_8662,0,null);var func__8083__auto___8664 = cljs.core.nth.call(null,vec__8626_8662,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8663,func__8083__auto___8664);
{
var G__8665 = cljs.core.next.call(null,seq__8621_8656__$1);
var G__8666 = null;
var G__8667 = 0;
var G__8668 = 0;
seq__8621_8644 = G__8665;
chunk__8622_8645 = G__8666;
count__8623_8646 = G__8667;
i__8624_8647 = G__8668;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gblame","show-git-blame","lt.plugins.gblame/show-git-blame",2747939297),new cljs.core.Keyword(null,"desc","desc",1016984067),"Git Blame: Show/update git blame for file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var active_ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.gblame.run_git_blame_on_path_and_content.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,active_ed))),lt.objs.editor.__GT_val.call(null,active_ed),active_ed);
})], null));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),new cljs.core.Keyword(null,"desc","desc",1016984067),"Git Blame: Remove",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544));
})], null));

/**
* @param {...*} var_args
*/
lt.plugins.gblame.__BEH__log_errors = (function() { 
var __BEH__log_errors__delegate = function (this$,args){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
console.log(cljs.core.clj__GT_js.call(null,args));
return lt.objs.notifos.done_working.call(null);
};
var __BEH__log_errors = function (this$,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__log_errors__delegate.call(this,this$,args);};
__BEH__log_errors.cljs$lang$maxFixedArity = 1;
__BEH__log_errors.cljs$lang$applyTo = (function (arglist__8669){
var this$ = cljs.core.first(arglist__8669);
var args = cljs.core.rest(arglist__8669);
return __BEH__log_errors__delegate(this$,args);
});
__BEH__log_errors.cljs$core$IFn$_invoke$arity$variadic = __BEH__log_errors__delegate;
return __BEH__log_errors;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","log-errors","lt.plugins.gblame/log-errors",1622224753),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__log_errors,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","blame-failed","lt.plugins.gblame/blame-failed",3161221104),null], null), null));

lt.plugins.gblame.__BEH__show_blame_data = (function __BEH__show_blame_data(this$,data){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var git_lines = clojure.string.split_lines.call(null,data);var gutter_markers = cljs.core.map.call(null,((function (current_gutters,gutter_div,git_lines){
return (function (p1__8627_SHARP_){return lt.plugins.gblame.gblame_gutter_marker.call(null,this$,p1__8627_SHARP_);
});})(current_gutters,gutter_div,git_lines))
,git_lines);var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"GBlame-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.Gblame-gutter","div.Gblame-gutter",3709797909),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings))),cljs.core.str("px")].join('')], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,gutter_marker){return ed.setGutterMarker(idx,"GBlame-gutter",gutter_marker);
}),gutter_markers));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","show-blame-data","lt.plugins.gblame/show-blame-data",967576621),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__show_blame_data,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","show-blame-data","lt.plugins.gblame/show-blame-data",967576621),null], null), null));

lt.plugins.gblame.__BEH__open_git_diff = (function __BEH__open_git_diff(this$,sha,line){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.plugins.gblame.open_diff.call(null,sha,path,line);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","open-git-diff","lt.plugins.gblame/open-git-diff",4597116680),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__open_git_diff,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-clicked","lt.plugins.gblame/git-blame-clicked",2441192571),null], null), null));

lt.plugins.gblame.__BEH__remove_git_blame = (function __BEH__remove_git_blame(this$){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("GBlame-gutter");
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.Gblame-gutter","div.Gblame-gutter",3709797909),lt.object.__GT_content.call(null,this$));
lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["GBlame-gutter",null], null), null),cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"))))], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__remove_git_blame,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),null], null), null));

lt.plugins.gblame.run_git_blame_on_path_and_content = (function run_git_blame_on_path_and_content(path,content,return_obj){lt.objs.notifos.working.call(null,"Getting git blame");
lt.object.merge_BANG_.call(null,return_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-output","lt.plugins.gblame/git-blame-output",2667398863),""], null));
lt.object.add_tags.call(null,return_obj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var child_proc = lt.plugins.gblame.exec.call(null,[cljs.core.str("git blame -n --date short --contents - "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",lt.objs.files.parent.call(null,path)], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword("lt.plugins.gblame","blame-failed","lt.plugins.gblame/blame-failed",3161221104),err,stdout,stderr);
} else
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword("lt.plugins.gblame","show-blame-data","lt.plugins.gblame/show-blame-data",967576621),stdout,stderr);
}
}));var proc_input = child_proc.stdin;return proc_input.end(content);
});

lt.plugins.gblame.hunk_spec = (function hunk_spec(line){return cljs.core.map.call(null,cljs.core.int$,cljs.core.rest.call(null,cljs.core.re_matches.call(null,/@@ -\d+,\d+ \+(\d+),(\d+) @@/,line)));
});

lt.plugins.gblame.diff_line_mappings = (function diff_line_mappings(diff){var lines = cljs.core.map_indexed.call(null,(function (diff_line_no,line){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,diff_line_no], null);
}),clojure.string.split_lines.call(null,diff));return cljs.core.reduce.call(null,(function (mappings,p__8631){var vec__8632 = p__8631;var line = cljs.core.nth.call(null,vec__8632,0,null);var diff_line_no = cljs.core.nth.call(null,vec__8632,1,null);var vec__8633 = cljs.core.last.call(null,mappings);var hunk = cljs.core.nth.call(null,vec__8633,0,null);var hunk_lines = cljs.core.nth.call(null,vec__8633,1,null);if(cljs.core.truth_(cljs.core.re_find.call(null,/^@@/,line)))
{return cljs.core.conj.call(null,mappings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.gblame.hunk_spec.call(null,line),cljs.core.PersistentVector.EMPTY], null));
} else
{return cljs.core.conj.call(null,cljs.core.pop.call(null,mappings),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hunk,cljs.core.conj.call(null,hunk_lines,diff_line_no)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),cljs.core.PersistentVector.EMPTY], null)], null),lines);
});

lt.plugins.gblame.src_line_to_diff_line = (function src_line_to_diff_line(line,mappings){var mapping = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__8641){var vec__8642 = p__8641;var vec__8643 = cljs.core.nth.call(null,vec__8642,0,null);var start_hunk = cljs.core.nth.call(null,vec__8643,0,null);var num_lines = cljs.core.nth.call(null,vec__8643,1,null);var _ = cljs.core.nth.call(null,vec__8642,1,null);return ((line >= start_hunk)) && ((line <= (start_hunk + num_lines)));
}),mappings));var vec__8639 = mapping;var vec__8640 = cljs.core.nth.call(null,vec__8639,0,null);var start_hunk = cljs.core.nth.call(null,vec__8640,0,null);var num_lines = cljs.core.nth.call(null,vec__8640,1,null);var line_mappings = cljs.core.nth.call(null,vec__8639,1,null);var line_offset_into_hunk = (line - start_hunk);return cljs.core.nth.call(null,line_mappings,line_offset_into_hunk);
});

lt.plugins.gblame.open_diff = (function open_diff(sha,path,line){var new_ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-separator","line-separator",3195996094),"\n",new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str(lt.objs.files.basename.call(null,path)),cljs.core.str(" @ "),cljs.core.str(sha)].join('')], null));lt.object.add_tags.call(null,new_ed,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.read-only","editor.read-only",1341634996),null], null), null));
lt.objs.editor.pool.set_syntax_by_path.call(null,new_ed,"foo.diff");
lt.objs.tabs.add_BANG_.call(null,new_ed);
lt.objs.tabs.active_BANG_.call(null,new_ed);
return lt.plugins.gblame.exec.call(null,[cljs.core.str("git show --no-color "),cljs.core.str(sha),cljs.core.str(" "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",lt.objs.files.parent.call(null,path)], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return console.log([err,stderr]);
} else
{lt.objs.editor.set_val.call(null,new_ed,stdout);
var mappings = lt.plugins.gblame.diff_line_mappings.call(null,stdout);var diff_line = lt.plugins.gblame.src_line_to_diff_line.call(null,line,mappings);lt.objs.editor.move_cursor.call(null,new_ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),diff_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
return lt.objs.editor.center_cursor.call(null,new_ed);
}
}));
});

}

//# sourceMappingURL=
//# sourceMappingURL=gblame_compiled.js.map