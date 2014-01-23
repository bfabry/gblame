if(!lt.util.load.provided_QMARK_('lt.plugins.gblame')) {
goog.provide('lt.plugins.gblame');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');



lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617),new cljs.core.Keyword(null,"width","width",1127031096),300);

lt.plugins.gblame.blame_settings = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617));

lt.plugins.gblame.__BEH__git_blame_settings = (function __BEH__git_blame_settings(this$,new_width){return lt.object.merge_BANG_.call(null,lt.plugins.gblame.blame_settings,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),new_width], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-settings","lt.plugins.gblame/git-blame-settings",2807832617),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__git_blame_settings,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Git Blame settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Blame gutter width (pixels)",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);

lt.plugins.gblame.gblame_gutter_marker = (function gblame_gutter_marker(git_content){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.GBlame-gutter-marker","div.GBlame-gutter-marker",3321821686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.gblame.blame_settings))),cljs.core.str("px; white-space: nowrap; overflow: hidden;")].join('')], null),clojure.string.replace_first.call(null,git_content,/\s*\d+\).*$/,")")], null));var seq__9356_9362 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9357_9363 = null;var count__9358_9364 = 0;var i__9359_9365 = 0;while(true){
if((i__9359_9365 < count__9358_9364))
{var vec__9360_9366 = cljs.core._nth.call(null,chunk__9357_9363,i__9359_9365);var ev__8082__auto___9367 = cljs.core.nth.call(null,vec__9360_9366,0,null);var func__8083__auto___9368 = cljs.core.nth.call(null,vec__9360_9366,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___9367,func__8083__auto___9368);
{
var G__9369 = seq__9356_9362;
var G__9370 = chunk__9357_9363;
var G__9371 = count__9358_9364;
var G__9372 = (i__9359_9365 + 1);
seq__9356_9362 = G__9369;
chunk__9357_9363 = G__9370;
count__9358_9364 = G__9371;
i__9359_9365 = G__9372;
continue;
}
} else
{var temp__4092__auto___9373 = cljs.core.seq.call(null,seq__9356_9362);if(temp__4092__auto___9373)
{var seq__9356_9374__$1 = temp__4092__auto___9373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9356_9374__$1))
{var c__7470__auto___9375 = cljs.core.chunk_first.call(null,seq__9356_9374__$1);{
var G__9376 = cljs.core.chunk_rest.call(null,seq__9356_9374__$1);
var G__9377 = c__7470__auto___9375;
var G__9378 = cljs.core.count.call(null,c__7470__auto___9375);
var G__9379 = 0;
seq__9356_9362 = G__9376;
chunk__9357_9363 = G__9377;
count__9358_9364 = G__9378;
i__9359_9365 = G__9379;
continue;
}
} else
{var vec__9361_9380 = cljs.core.first.call(null,seq__9356_9374__$1);var ev__8082__auto___9381 = cljs.core.nth.call(null,vec__9361_9380,0,null);var func__8083__auto___9382 = cljs.core.nth.call(null,vec__9361_9380,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___9381,func__8083__auto___9382);
{
var G__9383 = cljs.core.next.call(null,seq__9356_9374__$1);
var G__9384 = null;
var G__9385 = 0;
var G__9386 = 0;
seq__9356_9362 = G__9383;
chunk__9357_9363 = G__9384;
count__9358_9364 = G__9385;
i__9359_9365 = G__9386;
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
var __BEH__log_errors__delegate = function (this$,args){return console.log(cljs.core.clj__GT_js.call(null,args));
};
var __BEH__log_errors = function (this$,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__log_errors__delegate.call(this,this$,args);};
__BEH__log_errors.cljs$lang$maxFixedArity = 1;
__BEH__log_errors.cljs$lang$applyTo = (function (arglist__9387){
var this$ = cljs.core.first(arglist__9387);
var args = cljs.core.rest(arglist__9387);
return __BEH__log_errors__delegate(this$,args);
});
__BEH__log_errors.cljs$core$IFn$_invoke$arity$variadic = __BEH__log_errors__delegate;
return __BEH__log_errors;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","log-errors","lt.plugins.gblame/log-errors",1622224753),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__log_errors,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.plugins.gblame.__BEH__on_proc_exit_add_git_blame = (function __BEH__on_proc_exit_add_git_blame(this$,data){lt.object.remove_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));var git_lines = clojure.string.split_lines.call(null,data);lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"GBlame-gutter"))], null));
lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.Gblame-gutter","div.Gblame-gutter",3709797909),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width","300px"], null));
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (idx,git_line){return lt.objs.editor.__GT_cm_ed.call(null,this$).setGutterMarker(idx,"GBlame-gutter",lt.plugins.gblame.gblame_gutter_marker.call(null,git_line));
}),git_lines));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
return lt.object.add_tags.call(null,this$,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),null], null), null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.gblame","on-proc-exit-add-git-blame","lt.plugins.gblame/on-proc-exit-add-git-blame",4691103367),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.gblame.__BEH__on_proc_exit_add_git_blame,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));

lt.object.tag_behaviors.call(null,new cljs.core.Keyword("lt.plugins.gblame","git-blame-on","lt.plugins.gblame/git-blame-on",4188106925),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","remove-git-blame","lt.plugins.gblame/remove-git-blame",2187680544),null], null), null));

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

lt.plugins.gblame.run_git_blame_on_path_and_content = (function run_git_blame_on_path_and_content(path,content,return_obj){lt.object.merge_BANG_.call(null,return_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","git-blame-output","lt.plugins.gblame/git-blame-output",2667398863),""], null));
lt.object.add_tags.call(null,return_obj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.gblame","receiving-blame-output","lt.plugins.gblame/receiving-blame-output",4580012633),null], null), null));
var exec = require("child_process").exec;var child_proc = exec.call(null,[cljs.core.str("git blame --date short --contents - "),cljs.core.str(path)].join(''),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["cwd",lt.objs.files.parent.call(null,path)], null)),((function (exec){
return (function (err,stdout,stderr){if(cljs.core.truth_(err))
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),err,stdout,stderr);
} else
{return lt.object.raise.call(null,return_obj,new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),stdout,stderr);
}
});})(exec))
);var proc_input = child_proc.stdin;var chunked = cljs.core.partition_all.call(null,100,content);return lt.plugins.gblame.write_with_nodejs.call(null,true,chunked,proc_input);
});

}

//# sourceMappingURL=
//# sourceMappingURL=gblame_compiled.js.map