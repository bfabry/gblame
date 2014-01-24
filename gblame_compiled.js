if(!lt.util.load.provided_QMARK_('lt.plugins.gblame')) {
goog.provide('lt.plugins.gblame');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
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

lt.plugins.gblame.gblame_gutter_marker = (function gblame_gutter_marker(this$,git_content){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.GBlame-gutter-marker","div.GBlame-gutter-marker",3321821686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings))),cljs.core.str("px; white-space: nowrap; overflow: hidden;")].join('')], null),clojure.string.replace_first.call(null,git_content,/\s*\d+\).*$/,")")], null));var seq__8295_8301 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var sha = lt.plugins.gblame.sha_from_git_string.call(null,git_content);if(cljs.core._EQ_.call(null,"00000000",sha))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.gblame","git-blame-clicked","lt.plugins.gblame/git-blame-clicked",2441192571),lt.plugins.gblame.sha_from_git_string.call(null,git_content));
}
})], null)));var chunk__8296_8302 = null;var count__8297_8303 = 0;var i__8298_8304 = 0;while(true){
if((i__8298_8304 < count__8297_8303))
{var vec__8299_8305 = cljs.core._nth.call(null,chunk__8296_8302,i__8298_8304);var ev__8082__auto___8306 = cljs.core.nth.call(null,vec__8299_8305,0,null);var func__8083__auto___8307 = cljs.core.nth.call(null,vec__8299_8305,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8306,func__8083__auto___8307);
{
var G__8308 = seq__8295_8301;
var G__8309 = chunk__8296_8302;
var G__8310 = count__8297_8303;
var G__8311 = (i__8298_8304 + 1);
seq__8295_8301 = G__8308;
chunk__8296_8302 = G__8309;
count__8297_8303 = G__8310;
i__8298_8304 = G__8311;
continue;
}
} else
{var temp__4092__auto___8312 = cljs.core.seq.call(null,seq__8295_8301);if(temp__4092__auto___8312)
{var seq__8295_8313__$1 = temp__4092__auto___8312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8295_8313__$1))
{var c__7470__auto___8314 = cljs.core.chunk_first.call(null,seq__8295_8313__$1);{
var G__8315 = cljs.core.chunk_rest.call(null,seq__8295_8313__$1);
var G__8316 = c__7470__auto___8314;
var G__8317 = cljs.core.count.call(null,c__7470__auto___8314);
var G__8318 = 0;
seq__8295_8301 = G__8315;
chunk__8296_8302 = G__8316;
count__8297_8303 = G__8317;
i__8298_8304 = G__8318;
continue;
}
} else
{var vec__8300_8319 = cljs.core.first.call(null,seq__8295_8313__$1);var ev__8082__auto___8320 = cljs.core.nth.call(null,vec__8300_8319,0,null);var func__8083__auto___8321 = cljs.core.nth.call(null,vec__8300_8319,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8320,func__8083__auto___8321);
{
var G__8322 = cljs.core.next.call(null,seq__8295_8313__$1);
var G__8323 = null;
var G__8324 = 0;
var G__8325 = 0;
seq__8295_8301 = G__8322;
chunk__8296_8302 = G__8323;
count__8297_8303 = G__8324;
i__8298_8304 = G__8325;
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

lt.object.tag_behaviors.call(null,new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.plugins.gblame","on-proc-exit-add-git-blame","lt.plugins.gblame/on-proc-exit-add-git-blame",4691103367),null,new cljs.core.Keyword("lt.plugins.gblame","log-errors","lt.plugins.gblame/log-errors",1622224753),null], null), null));

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
__BEH__log_errors.cljs$lang$applyTo = (function (arglist__8326){
var this$ = cljs.core.first(arglist__8326);
var args = cljs.core.rest(arglist__8326);
return __BEH__log_errors__delegate(this$,args);
});
__BEH__log_errors.cljs$core$IFn$_invoke$arity$variadic = __BEH__log_errors__delegate;
return __BEH__log_errors;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","log-errors","lt.plugins.gblame/log-errors",1622224753),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__log_errors,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.plugins.gblame.__BEH__on_proc_exit_add_git_blame = (function __BEH__on_proc_exit_add_git_blame(this$,data){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var git_lines = clojure.string.split_lines.call(null,data);lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"GBlame-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.Gblame-gutter","div.Gblame-gutter",3709797909),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings))),cljs.core.str("px")].join('')], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,git_line){return lt.objs.editor.__GT_cm_ed.call(null,this$).setGutterMarker(idx,"GBlame-gutter",lt.plugins.gblame.gblame_gutter_marker.call(null,this$,git_line));
}),git_lines));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
return lt.objs.notifos.done_working.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","on-proc-exit-add-git-blame","lt.plugins.gblame/on-proc-exit-add-git-blame",4691103367),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__on_proc_exit_add_git_blame,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));

lt.plugins.gblame.open_diff = (function open_diff(sha,path,line){var new_ed = lt.objs.editor.pool.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-separator","line-separator",3195996094),"\n",new cljs.core.Keyword(null,"name","name",1017277949),"Diff"], null));lt.object.add_behavior_BANG_.call(null,new_ed,new cljs.core.Keyword("lt.objs.editor","read-only","lt.objs.editor/read-only",4613138148));
lt.objs.editor.pool.set_syntax_by_path.call(null,new_ed,"foo.diff");
lt.objs.tabs.add_BANG_.call(null,new_ed);
lt.objs.tabs.active_BANG_.call(null,new_ed);
return lt.plugins.gblame.exec.call(null,[cljs.core.str("git show --no-color "),cljs.core.str(sha),cljs.core.str(" "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",lt.objs.files.parent.call(null,path)], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return console.log([err,stderr]);
} else
{return lt.objs.editor.set_val.call(null,new_ed,stdout);
}
}));
});

lt.object.tag_behaviors.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),null,new cljs.core.Keyword("lt.plugins.gblame","open-git-diff","lt.plugins.gblame/open-git-diff",4597116680),null], null), null));

lt.plugins.gblame.__BEH__open_git_diff = (function __BEH__open_git_diff(this$,sha){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var line = lt.objs.editor.line.call(null,this$);return lt.plugins.gblame.open_diff.call(null,sha,path,line);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","open-git-diff","lt.plugins.gblame/open-git-diff",4597116680),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__open_git_diff,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-clicked","lt.plugins.gblame/git-blame-clicked",2441192571),null], null), null));

lt.plugins.gblame.__BEH__remove_git_blame = (function __BEH__remove_git_blame(this$){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("GBlame-gutter");
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.Gblame-gutter","div.Gblame-gutter",3709797909),lt.object.__GT_content.call(null,this$));
lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["GBlame-gutter",null], null), null),cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"))))], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__remove_git_blame,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),null], null), null));

lt.plugins.gblame.write_with_nodejs = (function write_with_nodejs(write_ok_QMARK_,chunks,stream){var callback_fn = (function callback_fn(){if(cljs.core.truth_(write_ok_QMARK_))
{return write_with_nodejs.call(null,stream.write(clojure.string.join.call(null,cljs.core.first.call(null,chunks))),cljs.core.rest.call(null,chunks),stream);
} else
{return stream.once(new cljs.core.Symbol(null,"drain'","drain'",1330659048,null),callback_fn);
}
});
if(!(cljs.core.empty_QMARK_.call(null,chunks)))
{return callback_fn.call(null);
} else
{return stream.end();
}
});

lt.plugins.gblame.run_git_blame_on_path_and_content = (function run_git_blame_on_path_and_content(path,content,return_obj){lt.objs.notifos.working.call(null,"Getting git blame");
lt.object.merge_BANG_.call(null,return_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-output","lt.plugins.gblame/git-blame-output",2667398863),""], null));
lt.object.add_tags.call(null,return_obj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var child_proc = lt.plugins.gblame.exec.call(null,[cljs.core.str("git blame --date short --contents - "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",lt.objs.files.parent.call(null,path)], null)),(function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),err,stdout,stderr);
} else
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),stdout,stderr);
}
}));var proc_input = child_proc.stdin;var chunked = cljs.core.partition_all.call(null,100,content);return lt.plugins.gblame.write_with_nodejs.call(null,true,chunked,proc_input);
});

}

//# sourceMappingURL=
//# sourceMappingURL=gblame_compiled.js.map