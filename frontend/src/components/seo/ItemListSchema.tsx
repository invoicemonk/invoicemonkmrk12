import { Helmet } from 'react-helmet-async';

interface ItemListItem {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

interface ItemListSchemaProps {
  name: string;
  description?: string;
  items: ItemListItem[];
  itemType?: 'Article' | 'BlogPosting' | 'ListItem' | 'Thing';
}

export function ItemListSchema({ 
  name, 
  description, 
  items,
  itemType = 'ListItem'
}: ItemListSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    ...(description && { "description": description }),
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": itemType === 'ListItem' ? 'ListItem' : itemType,
      "position": index + 1,
      ...(itemType === 'ListItem' ? {
        "item": {
          "@type": "Thing",
          "name": item.name,
          "url": item.url,
          ...(item.description && { "description": item.description }),
          ...(item.image && { "image": item.image })
        }
      } : {
        "name": item.name,
        "url": item.url,
        ...(item.description && { "description": item.description }),
        ...(item.image && { "image": item.image })
      })
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Specific variant for blog topic categories
interface BlogTopicListSchemaProps {
  topics: Array<{
    id: string;
    title: string;
    description: string;
    color?: string;
  }>;
}

export function BlogTopicListSchema({ topics }: BlogTopicListSchemaProps) {
  const baseUrl = 'https://invoicemonk.com';
  
  const items = topics.map(topic => ({
    name: topic.title,
    url: `${baseUrl}/blog?pillar=${topic.id}`,
    description: topic.description
  }));

  return (
    <ItemListSchema
      name="Invoicemonk Blog Topics"
      description="Comprehensive guides and articles organized by topic to help you master invoicing, accounting, and business finance."
      items={items}
      itemType="Thing"
    />
  );
}
