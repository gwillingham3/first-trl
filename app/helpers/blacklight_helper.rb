module BlacklightHelper
  include Blacklight::BlacklightHelperBehavior
  
  def application_name
	"TRL"
  end
  
  ##
  # A list of document partial templates to attempt to render
  #
  # @see #render_document_index_with_view
  # @return [Array<String>]
  def document_index_path_templates
    # first, the legacy template names for backwards compatbility
    # followed by the new, inheritable style
    # finally, a controller-specific path for non-catalog subclasses
    @document_index_path_templates ||= ["document_%{index_view_type}", "catalog/document_%{index_view_type}", "catalog/document_gallery"]
  end
end
