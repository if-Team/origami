<template>
	<div class="nav">
		<div class="nav-header">
			<div class="nav-header-wrapper">
				<h3 class="nav-title">{{@blog.title}}</h3>
				<span class="nav-desc">{{@blog.description}}</span>
			</div>
		</div>
		<ul>
			{{#foreach navigation}}
				<li class="nav-{{slug}}{{#if current}} nav-current{{/if}}" role="presentation"><a href="{{url absolute="true"}}">{{label}}</a></li>
			{{/foreach}}
		</ul>
		{{#if @labs.subscribers}}
			<a class="subscribe-button icon-feed" href="{{@blog.url}}/subscribe/"></a>
		{{else}}
			<a class="subscribe-button icon-feed" href="{{@blog.url}}/rss/"></a>
		{{/if}}
	</div>
	<span class="nav-cover"></span>
</template>
