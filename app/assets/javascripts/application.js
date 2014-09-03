// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap.min
//
// Required by Blacklight
//= require blacklight/blacklight
//= require_tree .

$(function () {
$('.popover-test').popover({ html: true, target: "click", content: function() { return $('.mycontent').html('<dl class="clearfix"> <% document_show_fields(document).each do |solr_fname, field| -%> <% if should_render_show_field? document, field %> <dt class="blacklight-<%= solr_fname.parameterize %>"><%= render_document_show_field_label document, :field => solr_fname %></dt> <dd class="blacklight-<%= solr_fname.parameterize %>"><%= render_document_show_field_value document, :field => solr_fname %></dd> <% end -%> <% end -%> </dl> <% # bookmark functions for items/docs -%> <%= render_index_doc_actions document, :wrapping_class => "index-document-functions" %>');}
	})
})